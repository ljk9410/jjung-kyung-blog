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
			className="flex flex-col p-4 rounded-lg group"
		>
			<div className="flex justify-between gap-4 sm:gap-12">
				<div>
					<div className="flex flex-row gap-2 mb-1">
						{article.tags.split(',').map((tag) => (
							<p
								className="text-[12px] sm:text-[14px] text-gray-600"
								key={tag}
							>
								{tag}
							</p>
						))}
					</div>
					<p className="max-w-[440px] text-[18px] sm:text-[20px] font-bold mb-2 sm:mb-2 group-hover:text-blue-600">
						{article.title}
					</p>
					<p className="max-w-[440px] text-[14px] sm:text-[14px] text-gray-600">
						{article.desc}
					</p>
				</div>
				<div className="relative min-w-[100px] w-[100px] h-[75px] sm:w-[120px] sm:h-[90px] transition ease-in-out group-hover:scale-110 group-hover:duration-300">
					<Image
						src={article.thumbnail}
						fill
						className="rounded-lg"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
				</div>
			</div>
			<div className="flex justify-between items-center mt-2 sm:mt-4">
				<p className="text-[14px] sm:text-[16px] font-semibold text-blue-600">
					{article.category}
				</p>
				<p className="text-[12px] sm:text-[14px] text-gray-600">
					{moment(article.date).format('YYYY년 MM월 DD일')}
				</p>
			</div>
		</Link>
	);
};

export default ArticleCard;
