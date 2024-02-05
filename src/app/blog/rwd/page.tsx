import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center'>
					<Image src='/rwd.jpg' height={350} width={350} alt='rwd' />
				</div>
				<div className='flex flex-col justify-center sm:w-[50%]'>
					<h1 className='text-2xl sm:text-3xl mb-3'>
						<span className='text-main-color'>
							Responsive Web Design (RWD):
						</span>{' '}
						Tworzenie Elastycznych i Dostosowanych Stron
						Internetowych{' '}
					</h1>
				</div>
				<div className='hidden w-[30%] sm:block'>
					<Image
						src='/rwd-long.png'
						height={510}
						width={510}
						alt='rwd'
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Czym Jest Responsive Web Design?
				</h2>
				<p className='mt-2'>
					Responsive Web Design to podejście do projektowania stron
					internetowych, które ma na celu dostosowanie wyglądu i
					układu strony do różnych rozmiarów ekranów i urządzeń.
					Oznacza to, że strona internetowa automatycznie dostosowuje
					się do ekranu komputera, tabletu lub smartfona, zapewniając
					użytkownikom spójne i optymalne doświadczenie.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Dlaczego RWD Jest Takie Istotne?
				</h2>
				<h3 className='mt-2'>
					1. Dostępność na Wszystkich Urządzeniach
				</h3>
				<p className='mt-2'>
					Dzięki RWD Twoja strona jest dostępna na każdym urządzeniu.
					Bez względu na to, czy ktoś przegląda ją na laptopie,
					tablecie czy telefonie komórkowym, zawartość pozostaje
					czytelna i łatwo dostępna.
				</p>
				<h3 className='mt-2'>2. Poprawa SEO</h3>
				<p className='mt-2'>
					Responsywne strony internetowe są często lepiej oceniane
					przez wyszukiwarki, co może przyczynić się do wyższego
					miejsca w wynikach wyszukiwania. Google faworyzuje strony
					dostosowane do urządzeń mobilnych.
				</p>
				<h3 className='mt-2'>
					3. Zwiększenie Zadowolenia Użytkowników
				</h3>
				<p className='mt-2'>
					Dobre wrażenia użytkownika są kluczowe dla sukcesu online.
					RWD zapewnia użytkownikom spójne doświadczenie niezależnie
					od urządzenia, co prowadzi do zwiększonej satysfakcji i
					zatrzymywania na stronie.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Jak Osiągnąć Responsive Web Design?
				</h2>
				<h3 className='mt-2'>1. Elastyczne Układy</h3>
				<p className='mt-2'>
					Wykorzystaj elastyczne jednostki do definiowania rozmiarów
					elementów, takie jak procenty zamiast pikseli.
				</p>
				<h3 className='mt-2'>2. Media Queries</h3>
				<p className='mt-2'>
					Użyj mediów zapytań, aby określić, jakie style CSS mają być
					stosowane w zależności od szerokości ekranu.
				</p>
				<h3 className='mt-2'>3. Testowanie na Różnych Urządzeniach</h3>
				<p className='mt-2'>
					Upewnij się, że testujesz swoją stronę na różnych
					urządzeniach, aby sprawdzić, czy działa poprawnie.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2'>
					Responsive Web Design to kluczowy element projektowania
					stron internetowych w erze mobilnej. Dzięki niemu możesz
					dotrzeć do większej publiczności i zapewnić użytkownikom
					doskonałe doświadczenie, niezależnie od urządzenia, którego
					używają.
				</p>
			</div>
		</section>
	);
};

export default page;
