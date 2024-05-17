import ArticleContent from '@/app/components/article/ArticleContent';
import { getArticleDataBySlug } from '@/app/lib/articles';
import moment from 'moment';
import { notFound } from 'next/navigation';

type Props = {
	params: {
		slug: string;
	};
};

const ArticleDetail = ({ params }: Props) => {
	const slug = params.slug;
	const articleData = getArticleDataBySlug(slug);
	const createdAt = moment(articleData?.date).format('YYYY년 MM월 DD일');

	if (!articleData) {
		return notFound();
	}

	return (
		<main className="prose prose-sm flex flex-col px-4 pt-8 mx-auto sm:prose-lg sm:pt-16">
			<header>
				<h1 className="text-2xl m-0">{articleData.title}</h1>
				<div className="flex flex-space">
					<p className="text-sm">{createdAt}</p>
				</div>
			</header>
			<ArticleContent content={articleData.content} />
		</main>
	);
};

export default ArticleDetail;
