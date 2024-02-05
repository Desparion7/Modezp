import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center'>
					<Image
						src='/fotografia.jpg'
						height={350}
						width={353}
						alt='rwd'
					/>
				</div>
				<div className='flex flex-col justify-center sm:w-[50%]'>
					<h1 className='text-2xl sm:text-3xl mb-3'>
						<span className='text-main-color'> Zdjęcia </span> na
						Stronach Internetowych:
						<p className='text-lg sm:text-xl sm:mb-3'>
							Wizualna Siła Komunikacji Online
						</p>
					</h1>
				</div>
				<div className='hidden w-[30%] sm:block'>
					<Image
						src='/fotografia-long.png'
						height={491}
						width={491}
						alt='rwd'
					/>
				</div>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Rola Zdjęć na Stronach Internetowych
				</h2>
				<h3 className='mt-2'>1. Bezpieczeństwo Danych</h3>
				<p className='mt-2'>
					Zdjęcia są często pierwszym elementem, który przyciąga uwagę
					odwiedzających stronę. Estetyczne i odpowiednio dobrane
					zdjęcia mogą zachęcić użytkowników do dłuższego pozostawania
					na stronie.
				</p>
				<h3 className='mt-2'>2. Wspieranie Treści</h3>
				<p className='mt-2'>
					Zdjęcia mogą doskonale uzupełniać treść tekstu, pomagając
					wizualizować przekazywane informacje. Dzięki nim treść staje
					się bardziej zrozumiała i atrakcyjna.
				</p>
				<h3 className='mt-2'>3. Kreowanie Wizerunku Marki</h3>
				<p className='mt-2'>
					Zdjęcia mogą odzwierciedlać osobowość i wartości marki.
					Dobrze dobrane zdjęcia mogą budować pozytywny wizerunek
					firmy i wzbudzać zaufanie klientów.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Jak Wykorzystać Zdjęcia na Stronach Internetowych?
				</h2>
				<h3 className='mt-2'>1. Wybór Właściwych Zdjęć </h3>
				<p className='mt-2'>
					Dobierz zdjęcia, które są zgodne z tematyką i przekazem
					strony. Staraj się unikać zdjęć ogólnikowych i postaw na te,
					które najlepiej oddają charakter twojej treści.
				</p>
				<h3 className='mt-2'>2. Optymalizacja Zdjęć </h3>
				<p className='mt-2'>
					Zadbaj o optymalizację zdjęć pod kątem rozmiaru i formatu.
					Unikaj ciężkich plików, które mogą spowalniać ładowanie
					strony.
				</p>
				<h3 className='mt-2'>3. Licencje i Prawa Autorskie</h3>
				<p className='mt-2'>
					Upewnij się, że masz odpowiednie prawa do używanych zdjęć,
					szczególnie jeśli są one używane w celach komercyjnych.
					Wiele stron oferuje zdjęcia na licencji Creative Commons.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2'>
					Efektywne wykorzystanie zdjęć na stronach internetowych może
					znacząco wpłynąć na przyciągnięcie uwagi użytkowników i
					budowę pozytywnego wizerunku marki. Dlatego warto poświęcić
					uwagę wyborowi i prezentacji zdjęć, aby osiągnąć lepszą
					skuteczność komunikacji online.
				</p>
			</div>
		</section>
	);
};

export default page;
