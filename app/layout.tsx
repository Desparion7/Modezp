import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';


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
			<body className={`${inter.className} bg-[#f0f9ff] h-[99rem]`}>
					<Header />
				<main className=''>
					{children}
				</main>
			</body>
		</html>
	);
}
