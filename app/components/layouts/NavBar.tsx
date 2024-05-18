import Link from 'next/link';

const NavBar = () => {
	return (
		<nav
			className="fixed flex justify-between items-center h-16 w-full z-40 px-5 bg-white bg-opacity-50 shadow-md"
			style={{
				backdropFilter:
					'blur(10px)' /* backdrop-filter를 적용하여 배경을 흐리게 만듭니다 */,
			}}
		>
			<Link href={'/'} className="flex items-center gap-4">
				{/* TODO: Logo 제작하기 */}
				<div className="w-10 h-10 bg-red-400 rounded-md" />
				<span className="font-bold text-xl">JJung Kyung Blog</span>
			</Link>
			{/* TODO: nav or dark-theme 적용하기 */}
			<div className="w-10 h-10 bg-slate-500 rounded-md hover:bg-red-300"></div>
		</nav>
	);
};

export default NavBar;
