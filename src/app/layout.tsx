import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Toast from '@/ui/toast';
import { GoogleTagManager } from '@next/third-parties/google';

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
  twitter: {
    card: 'summary_large_image',
  },
  keywords:
    'Tworzenie stron internetowych dla firm - profesjonalne i responsywne rozwiązania, Projektowanie stron www dostosowanych do urządzeń mobilnych - Rzeszów, Indywidualne projekty stron internetowych z zarządzaniem treścią CMS, Modernizacja i aktualizacja stron www - zwiększ bezpieczeństwo i funkcjonalność, Responsywne strony internetowe - optymalizacja dla wszystkich urządzeń, Strony www dla małych i średnich  przedsiębiorstw - skrojone na miarę Twojej firmy, Rozwiązania internetowe dostosowane do potrzeb biznesowych - efektywne i atrakcyjne wizualnie, Zarządzanie treścią stron www z łatwym CMS - aktualizuj swoją stronę bez wysiłku, Usługi web design- zwiększ swoją widoczność online',
  openGraph: {
    title: 'Modezp - Profesjonalne Tworzenie Stron Internetowych',
    description: 'Odkryj nasze kreatywne rozwiązania dla sukcesu Twojej firmy!',
    url: 'https://modezp.com',
    images: [
      {
        url: 'https://modezp.com/opengraph-image.jpg',
        width: 1091,
        height: 600,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body
        className={`${poppins.className} relative text-black overflow-x-hidden `}>
        <div className='absolute w-[100vw] h-[16vh] sm:h-[6.5rem] bg-black'></div>
        <Header />
        <Toast />
        <main className='-z-1'>{children}</main>
        <Footer />
        <GoogleTagManager gtmId='GTM-5MJG8XJV' />
      </body>
    </html>
  );
}
