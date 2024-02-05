import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center '>
					<Image
						src='/woocommerce.jpg'
						height={350}
						width={336}
						alt='woocommerce'
						className=' '
					/>
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl sm:text-3xl mb-3'>
						Wprowadzenie do{' '}
						<span className='text-main-color'>WooCommerce:</span>
					</h1>
					<p className='text-lg sm:text-xl sm:mb-3'>
						Twoje Wszechstronne Narzędzie do Sklepów Internetowych
					</p>
				</div>
				<div className='hidden w-[25%] sm:block'>
					<Image
						src='/woocommerce-long.png'
						height={425}
						width={510}
						alt='woocommerce'
						className=' '
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Czym Jest WooCommerce?
				</h2>
				<p className='mt-2'>
					WooCommerce to darmowy plugin do WordPressa, który pozwala
					przekształcić Twoją stronę internetową opartą na WordPressie
					w pełnoprawny sklep internetowy. Dzięki WooCommerce
					zyskujesz dostęp do szerokiego zakresu funkcji, które
					ułatwiają zarządzanie produktem, sprzedażą, płatnościami i
					innymi aspektami e-commerce.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Do Czego Służy WooCommerce?
				</h2>
				<h3 className='mt-2'>1. Tworzenie Sklepów Internetowych</h3>
				<p className='mt-2'>
					WooCommerce pozwala na szybkie utworzenie sklepu
					internetowego bez potrzeby umiejętności programowania.
					Możesz dodawać produkty, kategorie, opisy, ceny i wiele
					innych informacji, aby stworzyć atrakcyjny i funkcjonalny
					sklep.
				</p>
				<h3 className='mt-2'>2. Zarządzanie Produktami</h3>
				<p className='mt-2'>
					Narzędzie to umożliwia łatwe zarządzanie produktem. Możesz
					dodawać, usuwać i edytować produkty, śledzić dostępność
					towarów, a także automatycznie generować unikalne numery
					SKU.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Dlaczego Wybrać WooCommerce?
				</h2>
				<p className='mt-2'>
					Darmowe i Open Source: WooCommerce jest darmowym
					rozszerzeniem WordPressa, co oznacza, że nie musisz ponosić
					kosztów licencji.
				</p>
				<p className='mt-2'>
					Rozszerzalność: Dzięki dostępnej bazie rozszerzeń i motywów,
					WooCommerce może być dostosowane do różnych potrzeb
					biznesowych.
				</p>
				<p className='mt-2'>
					Zintegrowane Płatności: Obsługuje wiele popularnych bramek
					płatności, co ułatwia klientom dokonywanie zakupów.
				</p>
				<p className='mt-2'>
					Bogata Społeczność: Istnieje ogromna społeczność
					użytkowników WooCommerce, co oznacza, że zawsze masz dostęp
					do wsparcia i pomocy.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2'>
					W skrócie, WooCommerce to wszechstronne narzędzie, które
					pozwala na łatwe tworzenie i zarządzanie sklepem
					internetowym. Bez względu na to, czy jesteś początkującym
					przedsiębiorcą, czy doświadczonym handlowcem online,
					WooCommerce może stać się kluczowym narzędziem w rozwijaniu
					Twojego biznesu internetowego.
				</p>
			</div>
		</section>
	);
};

export default page;
