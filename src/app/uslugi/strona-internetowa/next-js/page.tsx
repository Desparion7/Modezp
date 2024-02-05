import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';

const Next = () => {
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
					priority
					className='hidden sm:inline object-cover z-[-3] '
				/>
				<Image
					src='/background-mobile.jpg'
					alt='backgorund-mobile'
					sizes='100vw'
					fill
					priority
					className='sm:hidden object-cover z-[-3] '
				/>
				</div>
				<div className='relative top-[-7vh] container xl:px-64 p-5 py-28 flex flex-col gap-6'>
					<div className='sm:mb-5 md:min-h-[24vh] bg-black bg-opacity-80 p-3  shadow-md shadow-main-color'>
						<h1 className='uppercase text-center text-xl lg:text-2xl md:text-3xl mb-6'>
							Dlaczego strona internetowa w{' '}
							<span className='text-main-color'>next.js</span>?{' '}
						</h1>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Next.js jest wartościowym wyborem do tworzenia stron
							internetowych, ponieważ oferuje serwerowe
							renderowanie dla szybszego ładowania i lepszego{' '}
							<Link href='/blog/seo'>
								<span className='text-main-color hover:border-b-2 border-main-color'>
									SEO{' '}
								</span>
							</Link>
							, wspiera JavaScript i React dla dynamicznych
							interfejsów, automatycznie dzieli kod dla optymalnej
							wydajności , umożliwia łatwe skalowanie projektu.
							Projekty pisane w next.js są pisane od podstaw, nie
							na gotowych szablonach.
						</p>
					</div>
					<div className='flex flex-col md:flex-row flex-wrap justify-center gap-5'>
						<LinkSmallCard
							title={'Strona internetowa'}
							link={'/uslugi/strona-internetowa'}
						/>
						<LinkSmallCard
							active={true}
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
					<SectionTitle>Strona w next.js</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Czym jest Next.js?
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Next.js to framework React.js, który umożliwia
							renderowanie po stronie serwera (SSR) przy użyciu
							środowiska Node.js na serwerze. Dzięki temu pozwala
							tworzyć szybkie i zoptymalizowane pod kątem SEO
							aplikacje internetowe. Jest obecnie
							najpopularniejszym oraz najczęściej pobieranym
							frameworkiem do React.js
						</p>
						<p className='pb-5 leading-8 text-justify'>
							Next.js obsługuje również Generowanie Statycznych
							Stron (SSG), co można zauważyć w podobny sposób jak
							w przypadku Gatsby.js. Jednakże, największą zaletą
							Next.js jest możliwość korzystania z obu tych
							funkcjonalności, co pozwala nam elastycznie
							definiować, które dane mają być pobierane po stronie
							serwera, a które mają być generowane statycznie.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Co to Server Side Rendering?
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Server Side Rendering (SSR) umożliwia wyrenderowanie
							całej strony po stronie serwera, a nie po stronie
							klienta, co jest charakterystyczne dla czystego
							React.js. Dzięki takiemu podejściu otrzymujemy od
							serwera w pełni wyrenderowany plik HTML zamiast
							polegać na renderowaniu całego DOM za pomocą
							JavaScript.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							Korzyściami płynącymi z takiego rozwiązania są
							znacznie szybsze czasy ładowania strony oraz
							mniejsze zużycie JavaScript. To z kolei ma istotny
							wpływ na optymalizację strony pod kątem SEO,
							ponieważ indeksowanie pliku HTML jest znacznie
							prostsze dla robotów wyszukiwarek niż indeksowanie
							stron renderowanych po stronie klienta.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Next.js i Jamstack
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Next.js jest często wykorzystywany w architekturze
							Jamstack, ponieważ pozwala łatwo integrować się z
							Headless CMS. Dzięki tej integracji, możliwe jest
							sprawnie zarządzanie treściami strony internetowej
							za pomocą systemu zarządzania treścią, a następnie
							wykorzystanie Next.js do renderowania i dostarczania
							tych treści na stronie internetowej. Jest to
							popularne podejście do tworzenia wydajnych i
							skalowalnych stron internetowych, które pozostają
							łatwe do zarządzania.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Popularność Next.js
						</h2>
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
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default Next;
