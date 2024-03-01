import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center '>
					<Image
						src='/wordpress-next.jpg'
						height={388}
						width={398}
						alt='wordpress-next'
						className=' '
					/>
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl sm:text-3xl mb-3'>
						Headless{' '}
						<span className='text-main-color'>
							WordPress z Next.js
						</span>
					</h1>
					<p className='text-lg sm:text-xl sm:mb-3'>
						Takie połączenie pozwala na tworzenie szybkich, witryn
					</p>
				</div>
				<div className='hidden w-[25%] sm:block'>
					<Image
						src='/wordpress-next-long.png'
						height={425}
						width={510}
						alt='wordpress-next'
						className=' '
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Headless WordPress z Next.js
				</h2>
				<p className='mt-2 leading-8'>
					Aktualnie strony wkonujemy głównie w Next.js, WordPress
					dodawany jest jako Panel zarządzania. Strona korzysta z
					wielu zalet Next.js i jednocześcnie posiada prosty panel dla
					użytkownika. Strona jest przystosowana do pracy na
					telefonach i tabletach. Zoptymalizowana pod kątem szybkości
					ładowania, kompatybilności z różnymi przeglądarkami oraz
					urządzeniami mobilnymi. Zaprojektowana maksymalizacji
					zysków.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Zalety takiego rozwiązania?
				</h2>
				<h3 className='mt-4 font-semibold'>Łatwości Zarządzania:</h3>
				<p className='mt-2 leading-8'>
					Intuicyjny interfejs użytkownika umożliwiający łatwą edycję
					i zarządzanie treścią.
				</p>
				<h3 className='mt-4 font-semibold'>
					Zaawansowana strona w atrakcyjnej cenie:
				</h3>
				<p className='mt-2 leading-8'>
					Niewiele firm świadczy pisanie tak zaawansowanych stron w
					tak niskiej cenie. Cena żależna jest od skompilkowania
					projektu. Dlatego zachęcamy do kontaktu i darmowej wyceny.
				</p>
				<h3 className='mt-4 font-semibold'>Efektywności Kosztowej:</h3>
				<p className='mt-2 leading-8'>
					Idealne dla małych i średnich przedsiębiorstw lub startupów
					z ograniczonym budżetem.
				</p>
				<h3 className='mt-4 font-semibold'>
					Niezrównaną Wydajność i Szybkość:
				</h3>
				<p className='mt-2 leading-8'>
					Szybkie czasy ładowania i optymalizacja wydajności dzięki
					serwerowemu renderowaniu i generowaniu statycznych stron.
				</p>
				<h3 className='mt-4 font-semibold'>
					Lepszą Optymalizację SEO:
				</h3>
				<p className='mt-2 leading-8'>
					Lepsze pozycjonowanie w wynikach wyszukiwania dzięki
					optymalizacji SEO.
				</p>
				<h3 className='mt-4 font-semibold'>
					Elastyczność i Skalowalność:
				</h3>
				<p className='my-2 leading-8'>
					Idealny do tworzenia złożonych i rozbudowanych aplikacji
					internetowych.
				</p>
				<h3 className='mt-2 font-semibold'>Interaktywne UI:</h3>
				<p className='mt-2 leading-8'>
					Możliwość tworzenia dynamicznych i interaktywnych
					interfejsów użytkownika.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Przykłady Zastosowania Next.js:
				</h2>
				<p className='mt-2 leading-8'>
					Wielkie firmy takie jak Netflix, Twitch, czy Hulu wybrały
					Next.js ze względu na jego wydajność, skalowalność i
					nowoczesne podejście do web developmentu. Ich sukcesy są
					dowodem na to, jak Next.js może transformować doświadczenia
					online i wspierać rozwój biznesu.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>Popularność Next.js</h2>
				<p className='mt-2 leading-8'>
					Next.js rzeczywiście ułatwia budowanie aplikacji Fullstack
					opartych na React.js, umożliwiając zarządzanie zarówno
					frontendem, jak i backendem w sposób bardziej zintegrowany.
					To narzędzie rozwiązuje wiele problemów związanych z
					renderowaniem JavaScript w przeglądarce, przekształcając
					wiele zadań na procesy wykonywane po stronie serwera.
					Next.js jest obecnie określany jako metaframework w świecie
					Reacta, co potwierdzają jego wyniki w rankingach i
					popularność. Fakt, że w 2021 roku zyskał więcej nowych
					gwiazdek na GitHubie niż sam React, świadczy o jego rosnącej
					popularności. Ponadto, znaczny wzrost liczby pobrań w
					okresie od początku do końca 2021 roku jest dowodem na
					rosnące zainteresowanie tym narzędziem. Rok 2022 i 2023 były
					rokiem Next.js i wszystko wskazuje że będzie nadal zyskiwał
					na popularności, co czyni go godnym uwagi narzędziem do
					rozważenia w kontekście projektów opartych na React.js.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2 leading-8'>
					Wybierając naszą firmę, otrzymujesz dostęp do dwóch różnych,
					ale równie skutecznych ścieżek tworzenia stron
					internetowych. Niezależnie od tego, czy wybierzesz
					sprawdzony WordPress z Page Builderem, czy innowacyjny
					Next.js, gwarantujemy profesjonalizm, indywidualne podejście
					i rozwiązania dostosowane do Twoich potrzeb. Skontaktuj się
					z nami, aby dowiedzieć się więcej i wybrać najlepsze
					rozwiązanie dla Twojego biznesu.
				</p>
			</div>
		</section>
	);
};

export default page;
