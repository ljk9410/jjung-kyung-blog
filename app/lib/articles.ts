import fs from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';
import path from 'path';
import { Article } from '../config/types';

const BASE_PATH = '/app/articles';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getArticlePaths = (category?: string) => {
	const folder = category || '**';
	const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);

	return paths;
};

const parseArticle = (postPath: string): Article => {
	const file = fs.readFileSync(postPath, 'utf8');
	const { data, content } = matter(file);
	const category = postPath.split(POSTS_PATH)[1].split('/')[1];

	return {
		title: data.title,
		slug: data.slug,
		date: data.date,
		desc: data.desc,
		thumbnail: data.thumbnail,
		tags: data.tags,
		content: content,
		category: category,
	};
};

export const getArticleList = (category?: string): Article[] => {
	const postPaths = getArticlePaths(category);
	const postList = postPaths.map((postPath) => parseArticle(postPath));

	return postList;
};

export const getArticleDataBySlug = (slug: string): Article | undefined => {
	const articleList = getArticleList();
	const articleFilteredBySlug = articleList.find(
		(article) => article.slug === slug
	);

	return articleFilteredBySlug;
};
