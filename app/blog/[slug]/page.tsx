import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const BlogDetail = ({ params }: Params) => {
	const slug = params.slug;

	return <div>{slug}</div>;
};

export default BlogDetail;
