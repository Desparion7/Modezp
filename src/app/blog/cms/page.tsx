import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center'>
					<Image src='/cms.jpg' height={350} width={345} alt='rwd' />
				</div>
				<div className='flex flex-col justify-center sm:w-[50%]'>
					<h1 className='text-2xl sm:text-3xl mb-3'>
						System Zarządzania Treścią{' '}
						<span className='text-main-color'>(CMS):</span>{' '}
						<p className='text-lg sm:text-xl sm:mb-3'>
							Łatwy Sposób na Tworzenie i Aktualizację Stron
						</p>
					</h1>
				</div>
				<div className='hidden w-[30%] sm:block'>
					<Image
						src='/cms-long.png'
						height={510}
						width={510}
						alt='rwd'
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Czym Jest System Zarządzania Treścią (CMS)?
				</h2>
				<p className='mt-2'>
					CMS to oprogramowanie, które umożliwia tworzenie, edycję i
					zarządzanie treścią na stronach internetowych bez
					konieczności znajomości kodowania. Pozwala to osobom bez
					technicznego doświadczenia na łatwe dodawanie nowych treści,
					aktualizowanie istniejących oraz zarządzanie stronami
					internetowymi.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Dlaczego CMS Jest Takie Istotne?
				</h2>
				<h3 className='mt-2'>1. Łatwość Użytkowania</h3>
				<p className='mt-2'>
					CMS jest przyjazne dla użytkownika i intuicyjne, co sprawia,
					że zarządzanie treścią staje się prostsze i bardziej
					dostępne dla wszystkich.
				</p>
				<h3 className='mt-2'>2. Szybkość Aktualizacji</h3>
				<p className='mt-2'>
					Dzięki CMS możesz błyskawicznie aktualizować treść na
					stronie, co jest kluczowe w dynamicznym świecie
					internetowym.
				</p>
				<h3 className='mt-2'>3. Współpraca Zespołowa</h3>
				<p className='mt-2'>
					CMS umożliwia współpracę wielu osób nad treścią,
					przydzielanie ról i uprawnień oraz śledzenie historii zmian.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Popularne Systemy Zarządzania Treścią
				</h2>
				<h3 className='mt-2'>1. WordPress</h3>
				<p className='mt-2'>
					WordPress jest jednym z najpopularniejszych CMS na świecie.
					Jest prosty w użyciu, oferuje ogromną liczbę wtyczek i
					motywów, co sprawia, że jest wyborem dla blogerów, firm i
					osób indywidualnych.
				</p>
				<h3 className='mt-2'>2. Joomla!</h3>
				<p className='mt-2'>
					Joomla! to CMS o rozbudowanych możliwościach, który jest
					często wybierany do bardziej zaawansowanych projektów
					internetowych.
				</p>
				<h3 className='mt-2'>3. Drupal</h3>
				<p className='mt-2'>
					Drupal to potężny CMS, który jest często stosowany w
					projektach korporacyjnych i instytucjonalnych.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2'>
					System Zarządzania Treścią to narzędzie, które demokratyzuje
					tworzenie stron internetowych, pozwalając każdemu na
					dzielenie się swoją treścią online. Niezależnie od tego, czy
					jesteś blogerem, przedsiębiorcą czy tworzysz strony dla
					klientów, CMS ułatwia zarządzanie treścią i tworzenie
					profesjonalnych stron internetowych.
				</p>
			</div>
		</section>
	);
};

export default page;
