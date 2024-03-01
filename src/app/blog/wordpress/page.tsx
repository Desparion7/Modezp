import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center '>
					<Image
						src='/wordpress.jpg'
						height={388}
						width={396}
						alt='wordpress-next'
						className=' '
					/>
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl sm:text-3xl mb-3'>
						Strona w{' '}
						<span className='text-main-color'>WordPress</span>
					</h1>
					<p className='text-lg sm:text-xl sm:mb-3'>
						Najpopularniejszy system zarządzania treścią (CMS)
					</p>
				</div>
				<div className='hidden w-[25%] sm:block'>
					<Image
						src='/wordpress-long.png'
						height={425}
						width={510}
						alt='wordpress'
						className=' '
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>Czym Jest WordPress?</h2>
				<p className='mt-2 leading-8'>
					WordPress to najpopularniejszy system zarządzania treścią
					(CMS) na świecie. Używany jest przez miliony stron
					internetowych, od prostych blogów po zaawansowane portale i
					sklepy internetowe. Jego elastyczność i łatwość obsługi
					sprawiają, że jest idealnym rozwiązaniem dla firm i
					indywidualnych użytkowników chcących zaistnieć w internecie.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>Dlaczego WordPress?</h2>
				<h3 className='mt-4 font-semibold'>Dostosowanie do Potrzeb:</h3>
				<p className='mt-2 leading-8'>
					WordPress oferuje szeroki wybór motywów i wtyczek,
					umożliwiając indywidualne dostosowanie strony.
				</p>
				<h3 className='mt-4 font-semibold'>Przyjazny dla SEO:</h3>
				<p className='mt-2 leading-8'>
					WordPress oferuje szeroki wybór motywów i wtyczek,
					umożliwiając indywidualne dostosowanie strony. Strony w
					WordPress są zoptymalizowane pod kątem wyszukiwarek
					internetowych.
				</p>
				<h3 className='mt-4 font-semibold'>Łatwość Zarządzania:</h3>
				<p className='mt-2 leading-8'>
					Intuicyjny panel administracyjny WordPress umożliwia łatwe
					zarządzanie treścią. Strony wykonane przez nas w next.js
					również używają WordPressa jako panel do zarządzania
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Responsywność i Mobile First
				</h2>
				<p className='mt-2 leading-8'>
					Nie zapominamy o urządzeniach mobilnych! Nasze strony są
					responsywne (RWD – Responsive Web Design), co gwarantuje, że
					będą wyświetlać się poprawnie na każdym urządzeniu. Idziemy
					za trendem “Mobile First“, priorytetowo traktując
					użytkowników mobilnych i dostosowując strony pod ekrany
					telefonów i tabletów. Statystyki pokazują, że coraz więcej
					osób korzysta z Internetu głównie za pośrednictwem urządzeń
					mobilnych. Projektowanie z myślą o mobilnych użytkownikach
					na pierwszym miejscu gwarantuje, że większość odwiedzających
					będzie miała pozytywne doświadczenie z Twoją stroną.
					Użytkownicy mobilni często mają inne oczekiwania i
					zachowania niż ci korzystający z komputerów stacjonarnych.
					Są bardziej skłonni do szybkiego przeglądania i oczekują
					szybkiego ładowania się stron, prostoty nawigacji i
					wyraźnych wezwań do działania. Google stosuje indeksowanie
					mobilne, co oznacza, że wersja mobilna strony jest brana pod
					uwagę jako główna w wynikach wyszukiwania. Strony
					zoptymalizowane dla urządzeń mobilnych mają większe szanse
					na wysokie pozycje w wynikach wyszukiwania, co prowadzi do
					zwiększonego ruchu na stronie. Strony zaprojektowane z
					podejściem “Mobile First“ są zazwyczaj lżejsze i ładują się
					szybciej. Szybkość ładowania strony jest kluczowym
					czynnikiem, zarówno dla doświadczenia użytkownika, jak i dla
					SEO.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Czym jest Page Builder?
				</h2>
				<p className='mt-2 leading-8'>
					Page Builder to narzędzie dla tych, którzy potrzebują dobrej
					ceny, szybkości realizacji i możliwości samodzielnej edycji.
					Jest idealne dla małych firm i projektów landing page.
					Specjalne wtyczki optymalizacyjne pomagają w uzyskaniu
					dobrych wyników szybkości ładowania strony. Czym jest Custom
					Code z ACF? To metoda dla wymagających klientów, którzy
					oczekują dedykowanych rozwiązań. Strony są kodowane od
					podstaw, co zapewnia minimalizację kodu i wtyczek, a tym
					samym lepszą optymalizację i wydajność.
				</p>
			</div>
		</section>
	);
};

export default page;
