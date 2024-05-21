import Link from 'next/link';
import { getArticleList } from './lib/articles';
import ArticleCard from './components/article/ArticleCard';

const Home = async () => {
  const articleList = getArticleList();

  return (
    <main className="flex min-h-screen flex-col items-center pb-[200px] pt-16">
      <h1 className="py-10">나만의 블로그</h1>
      <section className="flex max-w-[720px] flex-col gap-6 px-4">
        {articleList.map((article) => (
          <ArticleCard article={article} key={`${article.slug}`} />
        ))}
      </section>
    </main>
  );
};

export default Home;
