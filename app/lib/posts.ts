import fs from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';
import path from 'path';
import { Post, PostMatter } from '../config/types';
import moment from 'moment';

const BASE_PATH = '/app/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = (category?: string) => {
	const folder = category || '**';
	const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);

	return paths;
};

export const parsePostAbstract = (postPath: string) => {
	const filePath = postPath
		.slice(postPath.indexOf(BASE_PATH))
		.replace(`${BASE_PATH}/`, '')
		.replace('.mdx', '');
	const [category, slug] = filePath.split('/');
	const url = `/blog/${category}/${slug}`;

	return { url, category, slug };
};

const parsePostDetail = async (postPath: string) => {
	const file = fs.readFileSync(postPath, 'utf8');
	const { data, content } = matter(file);
	const grayMatter = data as PostMatter;
	const dateString = moment(grayMatter.date)
		.locale('ko')
		.format('YYYY년 MM월 DD일');
	return { ...grayMatter, dateString, content };
};

const parsePost = async (postPath: string): Promise<Post> => {
	const postAbstract = parsePostAbstract(postPath);
	const postDetail = await parsePostDetail(postPath);

	return { ...postAbstract, ...postDetail };
};

export const getPostList = async (category?: string): Promise<Post[]> => {
	const postPaths = getPostPaths(category);
	const postList = await Promise.all(
		postPaths.map((postPath) => parsePost(postPath))
	);

	return postList;
};
