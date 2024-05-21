import Link from 'next/link';
import DarkModeBtn from '../buttons/DarkModeBtn';

const NavBar = () => {
  return (
    <nav className="bg-white fixed z-40 flex h-16 w-full items-center justify-between px-5 shadow-md dark:bg-[#121212] dark:shadow-gray-600 dark:shadow-sm">
      <Link href={'/'} className="flex items-center gap-4">
        {/* TODO: Logo 제작하기 */}
        <div className="bg-red-400 h-10 w-10 rounded-md" />
        <span className="text-xl font-bold">JJung Kyung Blog</span>
      </Link>
      <DarkModeBtn />
    </nav>
  );
};

export default NavBar;
