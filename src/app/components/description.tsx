'use client';
import SectionTitle from '@/components/section-header';
import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
	return (
		<section
			className='relative container mx-auto pb-20 min-h-[65vh]'
			id='second-section'
		>
			<div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center sm:text-left'>
				<SectionTitle>Jak przebiega proces realizacji? </SectionTitle>
			</div>
			<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
				<h2 className='text-xl sm:text-2xl pb-5'>
					Rozpoczęcie projektu Twojej strony internetowej i podpisanie
					umowy
				</h2>
				<p className='pb-5 leading-8 text-justify'>
					Po skontaktowaniu się z nami i ustaleniu głównej wizji
					Twojej strony internetowej, w tym przewidzianych
					funkcjonalności, zapraszamy do przesłania podstawowych
					informacji o Twojej firmie oraz oferowanych przez Ciebie
					usługach. Prosimy również o dostarczenie zdjęć. Zarówno ze
					zdjęciami i opisami pomożemy.
				</p>
				<h2 className='text-xl sm:text-2xl pb-5'>
					Tworzenie graficznego projektu strony
				</h2>
				<p className='pb-5 leading-8 text-justify'>
					Kolejnym etapem współpracy jest przygotowanie graficznego
					projektu Twojej strony internetowej. Zajmie to maksymalnie 7
					dni. Przygotowany projekt zostanie Ci przesłany do
					akceptacji. Po Twojej zgodzie i wprowadzeniu ewentualnych
					poprawek, możemy przejść do kolejnego etapu realizacji
					projektu.
				</p>
				<h2 className='text-xl sm:text-2xl pb-5'>
					Finalizacja i uruchomienie strony internetowej dla Twojego
					biznesu
				</h2>
				<p className='pb-5 leading-8 text-justify'>
					Ostatnim krokiem jest przeniesienie projektu na kod i
					uruchomienie Twojej strony internetowej. Po finalnych
					poprawkach i Twoim ostatecznym zatwierdzeniu, zajmiemy się
					optymalizacją SEO, przeprowadzimy testy funkcjonalności oraz
					dostosujemy stronę do różnych urządzeń i przeglądarek.
					Gwarantujemy, że po pełnej weryfikacji strona będzie
					działała płynnie i bezbłędnie. Po oficjalnym uruchomieniu,
					zapewniamy również wsparcie, aby wszystko funkcjonowało
					zgodnie z Twoimi oczekiwaniami i potrzebami.
				</p>
			</div>
			<div className='w-[100%] md:w-[100%] mt-8 flex flex-col justify-between text-center sm:text-left'>
				<SectionTitle>
					Jak wybrać firmę tworzącą stronę internetową
				</SectionTitle>
			</div>
			<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
				<h2 className='text-xl sm:text-2xl pb-5'>
					Na co zwrócić uwagę wybierając firmę tworzącą stronę
					internetową.
				</h2>
				<h3 className='font-bold mb-2'>Cena i Koszty Utrzymania</h3>
				<p className='pb-5 leading-8 text-justify'>
					Do stworzenia strony internetowej NIE wybieraj agencji,
					tylko frelancerów. U nas jedna osoba przeprowadzi cię przez
					cały proces tworzenia strony.
				</p>
				<p className='pb-5 leading-8 text-justify'>
					Wybierając freelancera do stworzenia swojej strony
					internetowej, decydujesz się na niską cene stworzenia strony
					internetowej. W przeciwieństwie do agencji, które muszą
					pokryć koszty utrzymania biura, wynagrodzenia zespołu, a
					także inne związane z prowadzeniem działalności wydatki,
					freelancerzy mają znacznie niższe koszty operacyjne.
				</p>
				<h3 className='font-bold mb-2'>
					Komunikacja i Osobiste Zaangażowanie
				</h3>
				<p className='pb-5 leading-8 text-justify'>
					Praca z freelancerem oferuje również bardziej bezpośrednią i
					osobistą formę komunikacji. W przypadku agencji, często
					spotykamy się z sytuacją, gdzie jedna osoba zbiera wymagania
					projektu, a zupełnie inna osoba jest odpowiedzialna za jego
					realizację. To może prowadzić do nieporozumień i utrudnień w
					komunikacji. Współpracując z freelancerem, masz możliwość
					bezpośredniego kontaktu z osobą, która faktycznie pracuje
					nad Twoją stroną. To ułatwia szybkie wprowadzanie poprawek i
					rozwiązywanie ewentualnych problemów, co skutkuje
					płynniejszym procesem tworzenia strony.
				</p>
			</div>
			<div className='w-[100%] md:w-[100%] mt-8 flex flex-col justify-between text-center sm:text-left'>
				<SectionTitle>Cena strony internetowej</SectionTitle>
			</div>
			<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
				<h2 className='text-xl sm:text-2xl pb-5'>
					Odkryj Przystępne Ceny Tworzenia Stron Internetowych -
					Zaczynamy Już od 800zł!
				</h2>
				<p className='pb-5 leading-8 text-justify'>
					Rozumiemy, że koszt stworzenia strony internetowej jest
					jednym z kluczowych czynników, które bierzesz pod uwagę,
					decydując się na obecność w internecie. Dlatego z dumą
					informujemy, że cena stworzenia strony internetowej u nas
					zaczyna się już od 800 zł. Jednakże, warto pamiętać, że
					ostateczna cena projektu zależy od wielu czynników, w tym od
					stopnia skomplikowania strony.
				</p>
				<h3 className='font-bold mb-2'>
					Dlaczego Cena Zależy od Skomplikowania Strony?
				</h3>
				<p className='pb-5 leading-8 text-justify'>
					Cena tworzenia strony internetowej jest elastyczna i
					dostosowana do Twoich potrzeb. Skomplikowanie projektu może
					obejmować różne aspekty, takie jak:
				</p>
				<p className='pb-5 leading-8 text-justify'>
					<span className='font-bold'>
						Indywidualny projekt graficzny
					</span>{' '}
					– tworzenie unikatowego wyglądu strony, dopasowanego do
					Twojej marki.
				</p>
				<p className='pb-5 leading-8 text-justify'>
					<span className='font-bold'>Funkcjonalności</span> –
					integracja z systemami płatności, formularze kontaktowe,
					zaawansowane menu, portfolio, blog.
				</p>
				<p className='pb-5 leading-8 text-justify'>
					<span className='font-bold'>Optymalizacja SEO </span> –
					działania mające na celu poprawienie widoczności strony w
					wyszukiwarkach.
				</p>
				<p className='pb-5 leading-8 text-justify'>
					<span className='font-bold'>Responsywność </span> –
					dostosowanie strony do wyświetlania na różnych urządzeniach.
				</p>
				<p className='pb-5 leading-8 text-justify'>
					<span className='font-bold'>Treści </span> – profesjonalne
					tworzenie i optymalizacja treści pod kątem SEO.
				</p>
				<h3 className='mb-2'>
					Każdy projekt jest dla nas wyjątkowy, dlatego współpracując
					z nami, otrzymasz dokładną wycenę, która będzie
					odzwierciedleniem Twoich oczekiwań i zakresu pracy, jaki
					musimy wykonać, aby spełnić Twoje potrzeby.
				</h3>
				<motion.button
					name='free consultation'
					whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
					className='bg-button-background outline-none text-white text-md lg:text-lg mt-5 py-3 px-6 rounded-3xl  hover:bg-button-background-hover transition-all uppercase'
				>
					Darmowa Konsultacja
				</motion.button>
			</div>
		</section>
	);
};

export default Description;
