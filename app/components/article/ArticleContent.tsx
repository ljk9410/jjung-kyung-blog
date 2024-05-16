import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

type Props = {
	content: string;
};

const ArticleContent = ({ content }: Props) => {
	return (
		<MDXRemote
			source={content}
			options={{
				mdxOptions: {
					remarkPlugins: [remarkGfm],
					rehypePlugins: [],
				},
			}}
		/>
	);
};

export default ArticleContent;
