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
		<main>
			<h1>{articleData.title}</h1>
			<p>{createdAt}</p>
			<ArticleContent content={articleData.content} />
		</main>
	);
};

export default ArticleDetail;
