import { getPostList } from './lib/posts';

const Home = async () => {
	const postList = await getPostList();

	return (
		<main className="flex min-h-screen flex-col items-center p-12">
			<h1>나만의 블로그</h1>
			{postList.map((post) => {
				return <div key={post.url}>{post.title}</div>;
			})}
		</main>
	);
};

export default Home;
