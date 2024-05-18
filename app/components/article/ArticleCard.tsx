import { Article } from '@/app/config/types';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	article: Article;
};

const ArticleCard = ({ article }: Props) => {
	return (
		<Link
			href={`/article/${article.slug}`}
			className="flex flex-col p-4 rounded-lg bg-blue-100"
		>
			<div className="flex justify-between gap-4">
				<div>
					<div className="flex flex-row gap-2 mb-1">
						{article.tags.split(',').map((tag) => (
							<p className="text-[14px] text-gray-600" key={tag}>
								{tag}
							</p>
						))}
					</div>
					<p className="text-[16px] sm:text-[20px] font-bold mb-1 sm:mb-2">
						{article.title}
					</p>
					<p className="text-[14px] sm:text-[16px] text-gray-600">
						{article.desc}
					</p>
				</div>
				<Image
					src={article.thumbnail}
					width={130}
					height={90}
					className="hidden sm:block rounded-lg"
					alt="Screenshots of the dashboard project showing desktop version"
				/>
				<Image
					src={article.thumbnail}
					width={100}
					height={70}
					className="block sm:hidden rounded-lg"
					alt="Screenshot of the dashboard project showing mobile version"
				/>
			</div>
			<div className="flex justify-between items-center mt-4 sm:mt-6">
				<p className="text-[16px] sm:text-[18px] font-bold text-blue-500">
					{article.category}
				</p>
				<p className="text-[14px] sm:text-[16px] text-gray-600">
					{moment(article.date).format('YYYY년 MM월 DD일')}
				</p>
			</div>
		</Link>
	);
};

export default ArticleCard;