import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import DarkModeContextProvider from '@/context/dark-mode';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Modezp Agency',
	description: 'Strony internetowe na zamówienie',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body
				className={`${inter.className} bg-[#e0f2fe] dark:bg-gradient-to-r from-neutral-900 via-sky-900 to-stone-900  dark:text-white h-[99rem]`}
			>
				<DarkModeContextProvider>
					<Header />
					<main className=' -z-1'>{children}</main>
				</DarkModeContextProvider>
			</body>
		</html>
	);
}
