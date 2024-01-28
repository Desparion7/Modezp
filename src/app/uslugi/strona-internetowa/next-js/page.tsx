import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import styles from '../../styles.module.css';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';

const Next = () => {
	return (
		<div>
			<section
				className={`relative flex lg:py-10 justify-center items-center w-[100%] min-h-[100vh] mb-10  text-white`}
			>
				<div className=''>
					<Image
						src='/background2.jpng'
						alt='backgorund'
						sizes='100vw'
						fill
						priority={true}
						className='object-cover z-[-3]'
					/>
				</div>
				<div className='container lg:px-64 p-5 py-28 flex flex-col gap-6 z-2'>
					<div className='sm:mb-5 sm:h-[20vh]'>
						<h2 className='uppercase text-center text-lg lg:text-2xl md:text-3xl mb-6'>
							Dlaczego strona internetowa w{' '}
							<span className='text-main-color'>next.js</span>?{' '}
						</h2>
						<p className='text-md md:text-lg text-center sm:text-start'>
							Next.js jest wartościowym wyborem do tworzenia stron
							internetowych, ponieważ oferuje{' '}
							<span className='border-b-main-color border-b-2'>
								serwerowe renderowanie
							</span>{' '}
							dla{' '}
							<span className='border-b-main-color border-b-2'>
								szybszego ładowania
							</span>{' '}
							i{' '}
							<span className='border-b-main-color border-b-2'>
								lepszego SEO
							</span>{' '}
							, wspiera JavaScript i React dla dynamicznych
							interfejsów, automatycznie{' '}
							<span className='border-b-main-color border-b-2'>
								dzieli kod dla optymalnej wydajności
							</span>{' '}
							, umożliwia tworzenie statycznych stron, a także
							ułatwia{' '}
							<span className='border-b-main-color border-b-2'>
								wdrożenie i skalowanie projektu.
							</span>
						</p>
					</div>
					<div className='flex flex-row flex-wrap justify-center gap-5'>
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
							title={'Wsparcie Techniczne'}
							link={
								'/uslugi/strona-internetowa/wsparcie-techniczne'
							}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
					</div>
				</div>
				<div
					className={`absolute flex justify-center items-center z-4  w-[100vw] h-[20%] bottom-0 ${styles['shadow-services']}`}
				>
					<ScrollDownBtn />
				</div>
			</section>
			<section
				className='relative container mx-auto pb-20 min-h-[65vh]'
				id='second-section'
			>
				<div className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Strona w next.js</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-2xl pb-5'>Czym jest Next.js?</h3>
						<p className='pb-5 leading-8'>
							Next.js to framework React.js, który umożliwia
							renderowanie po stronie serwera (SSR) przy użyciu
							środowiska Node.js na serwerze. Dzięki temu pozwala
							tworzyć szybkie i zoptymalizowane pod kątem SEO
							aplikacje internetowe. Jest obecnie
							najpopularniejszym oraz najczęściej pobieranym
							frameworkiem do React.js
						</p>
						<p>
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
						<h3 className='text-2xl pb-5'>
							Co to Server Side Rendering?
						</h3>
						<p className='pb-5'>
							Server Side Rendering (SSR) umożliwia wyrenderowanie
							całej strony po stronie serwera, a nie po stronie
							klienta, co jest charakterystyczne dla czystego
							React.js. Dzięki takiemu podejściu otrzymujemy od
							serwera w pełni wyrenderowany plik HTML zamiast
							polegać na renderowaniu całego DOM za pomocą
							JavaScript.
						</p>
						<p>
							Korzyściami płynącymi z takiego rozwiązania są
							znacznie szybsze czasy ładowania strony oraz
							mniejsze zużycie JavaScript. To z kolei ma istotny
							wpływ na optymalizację strony pod kątem SEO,
							ponieważ indeksowanie pliku HTML jest znacznie
							prostsze dla robotów wyszukiwarek niż indeksowanie
							stron renderowanych po stronie klienta.
						</p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default Next;
