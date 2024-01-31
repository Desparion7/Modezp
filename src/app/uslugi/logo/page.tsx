'use client';
import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';

const Logo = () => {
	return (
		<div>
			<section
				className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[100vh] mb-10  text-white`}
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
				<div className='container xl:px-64 p-5 py-28 flex flex-col gap-6'>
					<div className='sm:mb-5 md:min-h-[24vh] bg-black bg-opacity-80 p-3  shadow-md shadow-main-color'>
						<h2 className='uppercase text-center text-xl lg:text-2xl md:text-3xl mb-6'>
							Projektowanie{' '}
							<span className='text-main-color'>Logo</span>{' '}
						</h2>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Twoja firma może się wyróżnić na rynku nie tylko
							dzięki doskonałym produktom, ale także poprzez
							unikatowe logo. Jego projekt składa się z trzech
							kluczowych elementów: sygnetu, logotypu i claimu,
							które mogą być stosowane razem lub oddzielnie, w
							zależności od potrzeb. Zapewniamy kompleksowe
							podejście do projektowania logo.
						</p>
					</div>
					<div className='relative flex flex-col md:flex-row flex-wrap justify-center gap-5 '>
						<LinkSmallCard
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
						<LinkSmallCard
							active={true}
							title={'Logo'}
							link={'/uslugi/logo'}
						/>
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
					<SectionTitle>Przykładowe realizacje</SectionTitle>
				</div>
				<div className='relative flex flex-wrap gap-5 justify-center container mx-auto pb-20'>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo1.PNG'
							alt='logo warsztatu'
							width={386}
							height={359}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo2.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo3.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo4.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo5.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo6.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo7.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
					<div className='relative w-[20%] h-auto z-50'>
						<Image
							src='/example-logo8.PNG'
							alt='logo warsztatu'
							width={388}
							height={380}
							priority
							className='w-[100%] h-[100%]'
						/>
					</div>
				</div>
			</section>
			<section className='relative container mx-auto pb-20 min-h-[65vh]'>
				<div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Etapy Realizacji</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Rozpoznanie i analiza briefu
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Pierwszym krokiem jest zrozumienie potrzeb klienta.
							To obejmuje analizę briefu, który zawiera informacje
							o firmie, jej celach, grupie docelowej, konkurencji,
							preferowanych kolorach, stylach i wszelkich innych
							specyficznych wymaganiach.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>Badania</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Następnie przeprowadzamy badania rynkowe, które
							obejmują analizę konkurencji, trendów branżowych i
							preferencji grupy docelowej. Celem jest uzyskanie
							głębszego zrozumienia sektora, w którym działa
							klient, oraz uniknięcie przypadkowego naśladowania
							innych znanych marek.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Tworzenie koncepcji
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Na tym etapie projektant tworzy różnorodne koncepcje
							graficzne. Pomysły te są generowane na podstawie
							zebranych informacji i twórczej interpretacji
							briefu. Często używa się szkiców ręcznych, aby
							szybko eksplorować różne pomysły.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Projektowanie cyfrowe
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Wybrane koncepcje są następnie rozwijane cyfrowo.
							Używa się specjalistycznego oprogramowania do
							grafiki, aby stworzyć bardziej szczegółowe i
							wyrafinowane wersje logo.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Prezentacja klientowi
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Projektowane logo jest prezentowane klientowi,
							często w kilku wariantach. Ważne jest, aby pokazać
							logo w różnych kontekstach, np. na wizytówkach,
							stronach internetowych, aby klient mógł zobaczyć,
							jak logo będzie wyglądało w praktycznym użyciu.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Odbiór opinii i modyfikacje
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Klient przekazuje swoje opinie na temat
							prezentowanych projektów. Na tej podstawie
							projektant wprowadza ewentualne modyfikacje,
							dopracowując logo do finalnej formy.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Finalizacja i dostarczenie plików
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Po zatwierdzeniu finalnego projektu, logo jest
							przygotowywane do użycia w różnych formatach i
							rozdzielczościach, odpowiednich do druku i użycia
							cyfrowego.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Wytyczne dotyczące marki
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Często dostarcza się także wytyczne dotyczące marki,
							które określają, jak logo powinno być stosowane, w
							tym informacje o kolorystyce, typografii i
							zastosowaniu.
						</p>
					</div>
				</div>
				<div className='w-[100%] md:w-[50%] mt-10 flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>
						Logo w Biznesie: Klucz do Sukcesu
					</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Pierwsze Wrażenie Jest Najważniejsze
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Logo często jest pierwszym punktem kontaktu między
							firmą a potencjalnym klientem. Dobre logo może
							natychmiast przyciągnąć uwagę i zaintrygować,
							podczas gdy słabo zaprojektowane może odstraszyć. W
							pierwszych sekundach logo może przekazać kluczowe
							wartości firmy, jej profesjonalizm i charakter. W
							świecie, gdzie decyzje konsumenckie są podejmowane
							błyskawicznie, pierwsze wrażenie ma kluczowe
							znaczenie.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Tożsamość i Charakter Marki
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Logo to wizualne odzwierciedlenie tożsamości marki.
							Przekazuje misję, wartości i ogólny charakter firmy.
							Dzięki dobrze zaprojektowanemu logo, marka jest w
							stanie komunikować swoje unikalne cechy i wyróżniać
							się na rynku. Jest to szczególnie ważne w branżach o
							wysokim stopniu konkurencji.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							Dla małych firm, dobrze zaprojektowane logo ma
							równie dużą, jeśli nie większą, wagę niż dla dużych
							korporacji. Dobre logo pomaga wyróżnić firmę spośród
							konkurencji i budować rozpoznawalność marki. Jest to
							szczególnie ważne w początkowej fazie rozwoju, gdy
							firma stara się zyskać uznanie i zaufanie klientów.
							Małe firmy często walczą o zaufanie i wiarygodność
							na rynku zdominowanym przez większe, uznane marki.
							Profesjonalnie zaprojektowane logo może znacząco
							podnieść postrzeganie firmy jako profesjonalnej i
							godnej zaufania.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Uniwersalność i Adaptowalność
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							W erze cyfrowej, logo musi być funkcjonalne w
							różnych środowiskach – od ekranów telefonów po
							wielkoformatowe bilbordy. Dobre logo jest
							elastyczne, skalowalne i łatwo adaptowalne do
							różnych formatów, jednocześnie zachowując swoją
							czytelność i rozpoznawalność. Projektowanie logo nie
							powinno być oparte wyłącznie na aktualnych trendach.
							Dobrze zaprojektowane logo jest ponadczasowe i może
							służyć firmie przez wiele lat, co jest ważne z
							punktu widzenia inwestycji w branding. Projektowanie
							logo to nie tylko kwestia estetyki; to strategiczna
							inwestycja w markę. W dzisiejszym zglobalizowanym
							świecie, gdzie decyzje konsumenckie są często
							podejmowane w ułamku sekundy.
						</p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default Logo;
