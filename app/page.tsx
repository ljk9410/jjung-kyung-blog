import Link from 'next/link';
import { getArticleList } from './lib/articles';

const Home = async () => {
	const articleList = getArticleList();

	return (
		<main className="flex min-h-screen flex-col items-center pt-16">
			<h1>나만의 블로그</h1>
			{articleList.map((article) => {
				return (
					<Link key={article.slug} href={`/article/${article.slug}`}>
						<div>{article.title}</div>
					</Link>
				);
			})}
		</main>
	);
};

export default Home;
