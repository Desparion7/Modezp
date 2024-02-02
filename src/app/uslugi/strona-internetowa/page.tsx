import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';

const WordPress = () => {
	return (
		<div>
			<section
				className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10  text-white`}
			>
				<div>
					<Image
						src='/background.JPG'
						alt='backgorund'
						sizes='100vw'
						fill
						priority={true}
						className='object-cover z-[-3]'
					/>
				</div>
				<div className='relative top-[-7vh] container xl:px-64 p-5 py-28 flex flex-col gap-6'>
					<div className='sm:mb-5 md:min-h-[24vh] bg-black bg-opacity-80 p-3  shadow-md shadow-main-color'>
						<h2 className='uppercase text-center text-xl lg:text-2xl md:text-3xl mb-6'>
							strona internetowa{' '}
						</h2>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Oferujemy profesjonalne usługi tworzenia stron
							internetowych w{' '}
							<Link href='/uslugi/strona-internetowa/next-js'>
								<span className='text-main-color hover:border-b-2 border-main-color'>
									Next.js{' '}
								</span>
							</Link>{' '}
							dla zaawansowanych projektów oraz w WordPressie dla
							tych z mniejszym budżetem. Specjalizujemy się w
							tworzeniu dynamicznych, wydajnych i{' '}
							<Link href='/blog/seo'>
								<span className='text-main-color hover:border-b-2 border-main-color'>
									SEO{' '}
								</span>
							</Link>{' '}
							zoptymalizowanych witryn, dopasowanych do
							indywidualnych potrzeb i budżetu klienta.{' '}
						</p>
					</div>
					<div className='flex flex-col md:flex-row flex-wrap justify-center gap-5'>
						<LinkSmallCard
							active={true}
							title={'Strona internetowa'}
							link={'/uslugi/strona-internetowa'}
						/>
						<LinkSmallCard
							title={'Strona w Next.js'}
							link={'/uslugi/strona-internetowa/next-js'}
						/>
						<LinkSmallCard
							title={'Strona w WordPress'}
							link={'/uslugi/strona-internetowa/word-press'}
						/>
						<LinkSmallCard
							title={'Sklep Internetowy'}
							link={'/uslugi/sklep'}
						/>
						<LinkSmallCard title={'Logo'} link={'/uslugi/logo'} />
						<LinkSmallCard
							title={'Projektowanie UI'}
							link={'/uslugi/strona-internetowa/projektowanie-ui'}
						/>
					</div>
				</div>
				<ScrollDownBtn />
			</section>
			<section
				className='relative container mx-auto pb-20 min-h-[65vh]'
				id='second-section'
			>
				<div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle> WordPress czy Next.js?</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							WordPress i Page Builder - Dostępność i Prostota:
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Dla klientów preferujących sprawdzone rozwiązania,
							oferujemy tworzenie stron na WordPressie w
							połączeniu z Page Builderem. To idealny wybór dla
							projektów wymagających:
						</p>
						<p className='leading-8 text-justify'>
							<span className='font-bold'>
								{' '}
								Łatwości Zarządzania:
							</span>{' '}
							Intuicyjny interfejs użytkownika umożliwiający łatwą
							edycję i zarządzanie treścią.
						</p>
						<p className='leading-8 text-justify'>
							<span className='font-bold'>
								{' '}
								Dostępności Wtyczek:
							</span>{' '}
							Bogata biblioteka wtyczek i motywów ułatwiająca
							personalizację strony.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							<span className='font-bold'>
								{' '}
								Efektywności Kosztowej:
							</span>{' '}
							Idealne dla małych i średnich przedsiębiorstw lub
							startupów z ograniczonym budżetem.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Next.js - Nowoczesność i Innowacja
						</h3>
						<p className='leading-8 text-justify'>
							<span className='font-bold'>
								{' '}
								Niezrównaną Wydajność i Szybkość:
							</span>{' '}
							Szybkie czasy ładowania i optymalizacja wydajności
							dzięki serwerowemu renderowaniu i generowaniu
							statycznych stron.
						</p>
						<p className='leading-8 text-justify'>
							<span className='font-bold'>
								{' '}
								Lepszą Optymalizację SEO:
							</span>{' '}
							Lepsze pozycjonowanie w wynikach wyszukiwania dzięki
							optymalizacji SEO.
						</p>
						<p className='leading-8 text-justify'>
							<span className='font-bold'>
								{' '}
								Elastyczność i Skalowalność:
							</span>{' '}
							Idealny do tworzenia złożonych i rozbudowanych
							aplikacji internetowych.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							<span className='font-bold'> Interaktywne UI:</span>{' '}
							Możliwość tworzenia dynamicznych i interaktywnych
							interfejsów użytkownika.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Przykłady Zastosowania Next.js:
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Wielkie firmy takie jak Netflix, Twitch, czy Hulu
							wybrały Next.js ze względu na jego wydajność,
							skalowalność i nowoczesne podejście do web
							developmentu. Ich sukcesy są dowodem na to, jak
							Next.js może transformować doświadczenia online i
							wspierać rozwój biznesu.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Popularność Next.js
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Next.js rzeczywiście ułatwia budowanie aplikacji
							Fullstack opartych na React.js, umożliwiając
							zarządzanie zarówno frontendem, jak i backendem w
							sposób bardziej zintegrowany. To narzędzie
							rozwiązuje wiele problemów związanych z
							renderowaniem JavaScript w przeglądarce,
							przekształcając wiele zadań na procesy wykonywane po
							stronie serwera. Next.js jest obecnie określany jako
							metaframework w świecie Reacta, co potwierdzają jego
							wyniki w rankingach i popularność. Fakt, że w 2021
							roku zyskał więcej nowych gwiazdek na GitHubie niż
							sam React, świadczy o jego rosnącej popularności.
							Ponadto, znaczny wzrost liczby pobrań w okresie od
							początku do końca 2021 roku jest dowodem na rosnące
							zainteresowanie tym narzędziem. Rok 2022 i 2023 były
							rokiem Next.js i wszystko wskazuje że będzie nadal
							zyskiwał na popularności, co czyni go godnym uwagi
							narzędziem do rozważenia w kontekście projektów
							opartych na React.js.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Podsumowanie
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Wybierając naszą firmę, otrzymujesz dostęp do dwóch
							różnych, ale równie skutecznych ścieżek tworzenia
							stron internetowych. Niezależnie od tego, czy
							wybierzesz sprawdzony WordPress z Page Builderem,
							czy innowacyjny Next.js, gwarantujemy
							profesjonalizm, indywidualne podejście i rozwiązania
							dostosowane do Twoich potrzeb. Skontaktuj się z
							nami, aby dowiedzieć się więcej i wybrać najlepsze
							rozwiązanie dla Twojego biznesu.
						</p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default WordPress;
