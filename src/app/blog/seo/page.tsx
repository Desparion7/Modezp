import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center'>
					<Image src='/seo.jpg' height={350} width={354} alt='rwd' />
				</div>
				<div className='flex flex-col justify-center sm:w-[50%]'>
					<h1 className='text-2xl sm:text-3xl mb-3'>
						<span className='text-main-color'>SEO </span> (Search
						Engine Optimization):
						<p className='text-lg sm:text-xl sm:mb-3'>
							Klucz do Widoczności Online
						</p>
					</h1>
				</div>
				<div className='hidden w-[30%] sm:block'>
					<Image
						src='/seo-long.png'
						height={491}
						width={491}
						alt='rwd'
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>Czym Jest SEO?</h2>
				<p className='mt-2'>
					SEO, czyli Search Engine Optimization, to zestaw technik i
					strategii, których celem jest poprawa widoczności strony
					internetowej w wynikach organicznych wyszukiwarek, takich
					jak Google, Bing czy Yahoo. Optymalizacja ta obejmuje wiele
					aspektów, takich jak optymalizacja treści, struktury strony,
					linkowania i wiele innych.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Dlaczego SEO Jest Takie Istotne?
				</h2>
				<h3 className='mt-2'>1. Wyższa Widoczność</h3>
				<p className='mt-2'>
					Optymalizacja SEO sprawia, że twoja strona jest lepiej
					widoczna w wynikach wyszukiwania. To oznacza, że więcej
					potencjalnych klientów może znaleźć twoją stronę.
				</p>
				<h3 className='mt-2'>2. Zwiększenie Ruchu</h3>
				<p className='mt-2'>
					Dzięki SEO możesz zwiększyć ruch na swojej stronie
					internetowej. Im wyższa pozycja w wynikach wyszukiwania, tym
					więcej osób odwiedzi twoją stronę.
				</p>
				<h3 className='mt-2'>3. Większa Wiarygodność</h3>
				<p className='mt-2'>
					Strony znajdujące się wysoko w wynikach wyszukiwania uważane
					są często za bardziej wiarygodne i wartościowe. Dlatego
					dobre SEO może budować zaufanie do twojej marki.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Jak Osiągnąć Sukces w SEO?
				</h2>
				<h3 className='mt-2'>1. Optymalizacja Treści: </h3>
				<p className='mt-2'>
					Twórz wysokiej jakości treści, bogate w odpowiednie słowa
					kluczowe.
				</p>
				<h3 className='mt-2'>2. Optymalizacja Techniczna</h3>
				<p className='mt-2'>
					Upewnij się, że twoja strona jest zoptymalizowana pod kątem
					szybkości, bezpieczeństwa i mobilności.
				</p>
				<h3 className='mt-2'>3. Budowa Linków:</h3>
				<p className='mt-2'>
					Zbuduj wartościowe linki prowadzące do swojej strony.
				</p>
				<h3 className='mt-2'>4. Monitorowanie i Analiza:</h3>
				<p className='mt-2'>
					Śledź wyniki SEO i dostosowuj swoją strategię na bieżąco.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2'>
					SEO to kluczowy element sukcesu online. Dzięki niemu możesz
					zwiększyć widoczność swojej strony, przyciągnąć więcej ruchu
					i budować reputację swojej marki. Niezależnie od tego, czy
					jesteś właścicielem małej strony internetowej, czy
					zarządzasz dużą platformą e-commerce, dobre SEO może
					sprawić, że osiągniesz wyższy poziom widoczności online.
				</p>
			</div>
		</section>
	);
};

export default page;
