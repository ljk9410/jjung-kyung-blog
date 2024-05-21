import type { Metadata } from 'next';
import './config/globals.css';
import NavBar from './components/layouts/NavBar';
import ThemeProviders from './components/layouts/ThemeProviders';
import { inter } from './assets/fonts';

export const metadata: Metadata = {
  title: '쩡경의 Blog',
  description: 'JJung Kyung Blog: Leaving Footprints: Chronicles of My Life',
  icons: {
    icon: '/develop-jjung-kyung.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <NavBar />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
