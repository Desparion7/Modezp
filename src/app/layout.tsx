import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Toast from '@/ui/toast';
import Script from 'next/script';
const GTM_ID = 'G-DS0HHHF9BX';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Modezp - Profesjonalne Tworzenie Stron Internetowych',
	description:
		'Modezp łączy Next.js i WordPress w tworzeniu responsywnych, szybkich stron internetowych. Odkryj nasze kreatywne rozwiązania dla sukcesu Twojej firmy!',
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
			<Script id='google-tag-manager' strategy='afterInteractive'>
				{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
			</Script>
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
