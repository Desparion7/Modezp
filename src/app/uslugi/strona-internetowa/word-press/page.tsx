import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import Link from 'next/link';
import ScrollDownBtn from '@/ui/scroll-down-btn';

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
							strona w{' '}
							<span className='text-main-color'>wordPress</span>?{' '}
						</h1>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Tworzymy również strony internetowe z użyciem
							WordPress, jednego z najbardziej znanych systemów
							zarządzania treścią{' '}
							<Link href='/blog/cms'>
								<span className='text-main-color hover:border-b-2 border-main-color'>
									CMS{' '}
								</span>
							</Link>
							, który oferuje szerokie możliwości. Tworzenie
							strony przy uzyciu tego narzędzia jest szczególnie
							polecane osobom chcącym mieć gotową stronę szybko i
							tanio. Dla bardziej ambitnych projektów polecamy
							Next.js.
						</p>
					</div>
					<div className='flex flex-col md:flex-row flex-wrap justify-center gap-5'>
						<LinkSmallCard
							title={'Strona internetowa'}
							link={'/uslugi/strona-internetowa'}
						/>
						<LinkSmallCard
							title={'Strona w Next.js'}
							link={'/uslugi/strona-internetowa/next-js'}
						/>
						<LinkSmallCard
							active={true}
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
					<SectionTitle>Strona w WordPress</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Czym Jest WordPress?
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							WordPress to najpopularniejszy system zarządzania
							treścią (CMS) na świecie. Używany jest przez miliony
							stron internetowych, od prostych blogów po
							zaawansowane portale i sklepy internetowe. Jego
							elastyczność i łatwość obsługi sprawiają, że jest
							idealnym rozwiązaniem dla firm i indywidualnych
							użytkowników chcących zaistnieć w internecie.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Dlaczego WordPress?
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							<span className='font-bold'>
								Dostosowanie do Potrzeb:
							</span>{' '}
							WordPress oferuje szeroki wybór motywów i wtyczek,
							umożliwiając indywidualne dostosowanie strony.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							{' '}
							<span className='font-bold'>
								{' '}
								Przyjazny dla SEO:
							</span>{' '}
							WordPress oferuje szeroki wybór motywów i wtyczek,
							umożliwiając indywidualne dostosowanie strony.
							Strony w WordPress są zoptymalizowane pod kątem
							wyszukiwarek internetowych.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							{' '}
							<span className='font-bold'>
								{' '}
								Łatwość Zarządzania:
							</span>{' '}
							Intuicyjny panel administracyjny WordPress umożliwia
							łatwe zarządzanie treścią. Strony wykonane przez nas
							w next.js również używają WordPressa jako panel do
							zarządzania
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Responsywność i Mobile First
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Nie zapominamy o urządzeniach mobilnych! Nasze
							strony są responsywne (RWD – Responsive Web Design),
							co gwarantuje, że będą wyświetlać się poprawnie na
							każdym urządzeniu. Idziemy za trendem &ldquo;Mobile
							First&ldquo;, priorytetowo traktując użytkowników
							mobilnych i dostosowując strony pod ekrany telefonów
							i tabletów. Statystyki pokazują, że coraz więcej
							osób korzysta z Internetu głównie za pośrednictwem
							urządzeń mobilnych. Projektowanie z myślą o
							mobilnych użytkownikach na pierwszym miejscu
							gwarantuje, że większość odwiedzających będzie miała
							pozytywne doświadczenie z Twoją stroną. Użytkownicy
							mobilni często mają inne oczekiwania i zachowania
							niż ci korzystający z komputerów stacjonarnych. Są
							bardziej skłonni do szybkiego przeglądania i
							oczekują szybkiego ładowania się stron, prostoty
							nawigacji i wyraźnych wezwań do działania. Google
							stosuje indeksowanie mobilne, co oznacza, że wersja
							mobilna strony jest brana pod uwagę jako główna w
							wynikach wyszukiwania. Strony zoptymalizowane dla
							urządzeń mobilnych mają większe szanse na wysokie
							pozycje w wynikach wyszukiwania, co prowadzi do
							zwiększonego ruchu na stronie. Strony zaprojektowane
							z podejściem &ldquo;Mobile First&ldquo; są zazwyczaj
							lżejsze i ładują się szybciej. Szybkość ładowania
							strony jest kluczowym czynnikiem, zarówno dla
							doświadczenia użytkownika, jak i dla SEO.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Responsywność i Mobile First
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Czym jest Page Builder? Page Builder to narzędzie
							dla tych, którzy potrzebują dobrej ceny, szybkości
							realizacji i możliwości samodzielnej edycji. Jest
							idealne dla małych firm i projektów landing page.
							Specjalne wtyczki optymalizacyjne pomagają w
							uzyskaniu dobrych wyników szybkości ładowania
							strony.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							Czym jest Custom Code z ACF? To metoda dla
							wymagających klientów, którzy oczekują dedykowanych
							rozwiązań. Strony są kodowane od podstaw, co
							zapewnia minimalizację kodu i wtyczek, a tym samym
							lepszą optymalizację i wydajność.
						</p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default WordPress;
