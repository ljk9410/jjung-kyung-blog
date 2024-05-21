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
  const tagList = articleData?.tags.split(',').map((tag) => tag) || [];

  if (!articleData) {
    return notFound();
  }

  return (
    <main className="prose prose-sm dark:prose-invert flex flex-col px-4 pt-20 pb-[100px] sm:pt-24 sm:pb-[150px] mx-auto sm:prose-lg">
      <header>
        <h1 className="mb-4 leading-normal sm:leading-normal sm:mb-6 font-semibold">
          {articleData.title}
        </h1>
        <div className="flex flex-col items-start">
          <div className="flex flex-row gap-2">
            {[articleData.category, ...tagList].map((tag) => (
              <div
                key={tag}
                className="px-4 py-1 text-[12px] sm:text-[14px] bg-blue-50 rounded-full dark:text-gray-600"
              >
                #{tag}
              </div>
            ))}
          </div>
          <span className="mt-4 text-[12px] sm:text-[14px] text-gray-500 ">
            {createdAt}
          </span>
        </div>
      </header>
      <ArticleContent content={articleData.content} />
    </main>
  );
};

export default ArticleDetail;
