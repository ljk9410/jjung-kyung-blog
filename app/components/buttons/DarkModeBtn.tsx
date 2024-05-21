'use client';

import { MoonIcon } from '@heroicons/react/24/outline';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark');
			}}
		>
			{theme === 'light' ? (
				<SunIcon className="size-8" />
			) : (
				<MoonIcon className="size-8" />
			)}
		</button>
	);
};

export default DarkModeBtn;
