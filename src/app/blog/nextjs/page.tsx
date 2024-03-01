import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center '>
					<Image
						src='/next.jpg'
						height={393}
						width={393}
						alt='next.js'
					/>
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl sm:text-3xl mb-3'>
						Strona w{' '}
						<span className='text-main-color'>Next.js</span>
					</h1>
					<p className='text-lg sm:text-xl sm:mb-3'>
						Szybka, nowoczesna strona z wielkimi możliwościami
					</p>
				</div>
				<div className='hidden w-[25%] sm:block'>
					<Image
						src='/next-long.png'
						height={425}
						width={510}
						alt='next.js'
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>Czym jest Next.js?</h2>
				<p className='mt-2 leading-8'>
					Next.js to framework React.js, który umożliwia renderowanie
					po stronie serwera (SSR) przy użyciu środowiska Node.js na
					serwerze. Dzięki temu pozwala tworzyć szybkie i
					zoptymalizowane pod kątem SEO aplikacje internetowe. Jest
					obecnie najpopularniejszym oraz najczęściej pobieranym
					frameworkiem do React.js
				</p>
				<p className='mt-2 leading-8'>
					Next.js obsługuje również Generowanie Statycznych Stron
					(SSG), co można zauważyć w podobny sposób jak w przypadku
					Gatsby.js. Jednakże, największą zaletą Next.js jest
					możliwość korzystania z obu tych funkcjonalności, co pozwala
					nam elastycznie definiować, które dane mają być pobierane po
					stronie serwera, a które mają być generowane statycznie.
				</p>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Co to Server Side Rendering?
				</h2>
				<p className='mt-2 leading-8'>
					Server Side Rendering (SSR) umożliwia wyrenderowanie całej
					strony po stronie serwera, a nie po stronie klienta, co jest
					charakterystyczne dla czystego React.js. Dzięki takiemu
					podejściu otrzymujemy od serwera w pełni wyrenderowany plik
					HTML zamiast polegać na renderowaniu całego DOM za pomocą
					JavaScript.
				</p>
				<p className='mt-2 leading-8'>
					Korzyściami płynącymi z takiego rozwiązania są znacznie
					szybsze czasy ładowania strony oraz mniejsze zużycie
					JavaScript. To z kolei ma istotny wpływ na optymalizację
					strony pod kątem SEO, ponieważ indeksowanie pliku HTML jest
					znacznie prostsze dla robotów wyszukiwarek niż indeksowanie
					stron renderowanych po stronie klienta.
				</p>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>Next.js i Jamstack</h2>
				<p className='mt-2 leading-8'>
					Next.js jest często wykorzystywany w architekturze Jamstack,
					ponieważ pozwala łatwo integrować się z Headless CMS. Dzięki
					tej integracji, możliwe jest sprawnie zarządzanie treściami
					strony internetowej za pomocą systemu zarządzania treścią, a
					następnie wykorzystanie Next.js do renderowania i
					dostarczania tych treści na stronie internetowej. Jest to
					popularne podejście do tworzenia wydajnych i skalowalnych
					stron internetowych, które pozostają łatwe do zarządzania.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
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
		</section>
	);
};

export default page;
