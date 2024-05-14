export interface PostMatter {
	title: string;
	date: Date;
	dateString: string;
	thumbnail: string;
	desc: string;
}

export interface Post extends PostMatter {
	url: string;
	slug: string;
	content: string;
}
