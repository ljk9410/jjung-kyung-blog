import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
	title: "JJung Kyung Blog",
	description: "JJung Kyung Blog: Leaving Footprints: Chronicles of My Life",
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
				<nav>
					<ol>
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</ol>
				</nav>
				{children}
			</body>
		</html>
	);
}
