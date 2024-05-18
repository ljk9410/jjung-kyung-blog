import type { Metadata } from 'next';
import './config/globals.css';
import { inter } from './ui/fonts';
import NavBar from './components/layouts/NavBar';

export const metadata: Metadata = {
	title: 'JJung Kyung Blog',
	description: 'JJung Kyung Blog: Leaving Footprints: Chronicles of My Life',
	// icons (favicons)
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
