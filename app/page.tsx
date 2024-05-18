import Link from 'next/link';
import { getArticleList } from './lib/articles';
import ArticleCard from './components/article/ArticleCard';

const Home = async () => {
	const articleList = getArticleList();

	return (
		<main className="flex min-h-screen flex-col items-center pt-16 pb-[200px]">
			<h1 className="py-10">나만의 블로그</h1>
			<section className="flex flex-col max-w-[720px] px-4 gap-6">
				{articleList.map((article) => (
					<ArticleCard article={article} key={`${article.slug}`} />
				))}
			</section>
		</main>
	);
};

export default Home;
