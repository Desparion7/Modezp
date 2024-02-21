import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Toast from '@/ui/toast';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Modezp - Profesjonalne Tworzenie Stron Internetowych',
	description:
		'Modezp to frima specjalizująca się w projektowaniu i rozwijaniu zaawansowanych stron internetowych z wykorzystaniem Next.js i WordPress. Łączymy nowoczesne technologie z kreatywnym designem, aby dostarczać responsywne, szybkie i optymalizowane pod SEO witryny, które pomagają naszym klientom osiągać cele biznesowe i zwiększać widoczność w sieci.',
	icons: {
		icon: '/logo.jpg',
	},
	keywords:
	'Tworzenie stron internetowych dla firm - profesjonalne i responsywne rozwiązania, Projektowanie stron www dostosowanych do urządzeń mobilnych - Rzeszów, Indywidualne projekty stron internetowych z zarządzaniem treścią CMS, Modernizacja i aktualizacja stron www - zwiększ bezpieczeństwo i funkcjonalność, Responsywne strony internetowe - optymalizacja dla wszystkich urządzeń, Strony www dla małych i średnich  przedsiębiorstw - skrojone na miarę Twojej firmy, Rozwiązania internetowe dostosowane do potrzeb biznesowych - efektywne i atrakcyjne wizualnie, Zarządzanie treścią stron www z łatwym CMS - aktualizuj swoją stronę bez wysiłku, Usługi web design- zwiększ swoją widoczność online',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body
				className={`${poppins.className}  bg-[#cbced1] relative text-black overflow-x-hidden`}
			>
				<div className='absolute w-[100vw] h-[16vh] sm:h-[6.5rem] bg-black'></div>
				<Header />
				<Toast />
				<main className='-z-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
