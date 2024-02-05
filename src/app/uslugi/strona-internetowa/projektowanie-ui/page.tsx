import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';

const Projects = () => {
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
				<div className='container relative top-[-7vh] xl:px-64 p-5 py-28 flex flex-col gap-6'>
					<div className='sm:mb-5 md:min-h-[24vh] bg-black bg-opacity-80 p-3  shadow-md shadow-main-color'>
						<h1 className='uppercase text-center text-xl lg:text-2xl md:text-3xl mb-6'>
							Projektowanie{' '}
							<span className='text-main-color'>UI</span>{' '}
						</h1>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Projektowanie interfejsu użytkownika (UI) to proces,
							który wykracza poza samo kreowanie estetycznego
							wyglądu interfejsu. W naszym podejściu, jest to
							rozwinięcie i uzupełnienie projektowania doświadczeń
							użytkownika(UX). Skuteczne projektowanie UI wymaga
							nie tylko umiejętności graficznych. Istotne jest
							również przewidywanie reakcji użytkowników i
							uzasadnianie każdego podjętego wyboru projektowego.
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
							title={'Strona w WordPress'}
							link={'/uslugi/strona-internetowa/word-press'}
						/>
						<LinkSmallCard
							title={'Sklep Internetowy'}
							link={'/uslugi/sklep'}
						/>
						<LinkSmallCard title={'Logo'} link={'/uslugi/logo'} />
						<LinkSmallCard
							active={true}
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
					<SectionTitle>Projektowanie UI</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Czym jest projektowanie UI?
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Projektowanie UI, czyli projektowanie interfejsu
							użytkownika, stanowi kluczowy etap w procesie
							tworzenia stron internetowych i aplikacji. Jest to
							działanie, które wymaga nie tylko umiejętności
							graficznych, ale również głębokiego zrozumienia
							potrzeb i zachowań użytkowników. Jak przebiega
							proces projektowania UI od etapu prototypowania po
							finalne projektowanie graficzne, korzystając z
							doświadczeń agencji specjalizującej się w tworzeniu
							projektów UX.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Tworzenie projektu prototypu
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Pierwszym krokiem w projektowaniu UI jest tworzenie
							prototypu. Prototypowanie pozwala na wizualizację
							przyszłej strony internetowej lub aplikacji, co jest
							niezbędne do zrozumienia jej funkcjonalności oraz do
							identyfikacji i eliminacji potencjalnych problemów.
							W tym etapie, korzystając z założeń klienta oraz
							wyników badań UX, projektanci tworzą wstępne
							koncepcje, które są następnie testowane i
							modyfikowane. Dzięki temu procesowi można zapewnić,
							że finalny produkt będzie intuicyjny i przyjazny dla
							użytkownika.
						</p>
					</div>
					<div className='mt-10'>
						<h2 className='text-xl sm:text-2xl pb-5'>
							Projektowanie graficzne (UI)
						</h2>
						<p className='pb-5 leading-8 text-justify'>
							Po pozytywnym zatwierdzeniu prototypu, projekt
							wchodzi w fazę projektowania graficznego. To tutaj
							narodzi się ostateczny wygląd strony internetowej
							lub aplikacji. Współczesne agencje często
							wykorzystują do tego celu zaawansowane narzędzia
							takie jak Figma, które umożliwiają efektywną pracę
							nad detalami projektu oraz współpracę z klientem.
							Projektowanie graficzne obejmuje nie tylko estetykę,
							ale również usability - czyli użyteczność
							interfejsu. Projektanci starają się, aby strona nie
							tylko świetnie wyglądała, ale była również
							funkcjonalna i zgodna z najnowszymi trendami w
							designie.
						</p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default Projects;
