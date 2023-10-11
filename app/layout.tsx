import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';


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
			<body className={`${inter.className} bg-[#e0f2fe] h-[99rem]`}>
					<Header />
				<main className='pt-[7.45rem] -z-1'>
					{children}
				</main>
			</body>
		</html>
	);
}
