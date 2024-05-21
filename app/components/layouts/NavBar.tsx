import Link from 'next/link';
import DarkModeBtn from '../buttons/DarkModeBtn';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center bg-white h-16 fixed z-40 w-full shadow-md dark:bg-[#121212] dark:shadow-gray-600 dark:shadow-sm">
      <div className="flex justify-between w-full max-w-[1080px] px-6">
        <Link href={'/'} className="flex items-center gap-2 group">
          <Image
            width={60}
            height={60}
            src={'/peace-jjung-kyung.png'}
            alt="main-logo"
            className="group-hover:hidden"
          />
          <Image
            width={60}
            height={60}
            src={'/idea-jjung-kyung.png'}
            alt="main-logo"
            className="hidden group-hover:block"
          />
          <span className="text-xl font-bold">쩡경의 Blog</span>
        </Link>
        <DarkModeBtn />
      </div>
    </nav>
  );
};

export default NavBar;
