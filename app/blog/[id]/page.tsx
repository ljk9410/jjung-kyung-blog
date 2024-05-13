const BlogDetail = ({ params }: { params?: { id: string } }) => {
	const id = params?.id;

	return <div>{id}</div>;
};

export default BlogDetail;
