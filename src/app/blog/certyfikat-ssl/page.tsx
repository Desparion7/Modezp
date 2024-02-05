import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<section className='relative container flex flex-col mx-auto px-5 lg:px-10 py-20 min-h-[91vh] '>
			<div className='flex flex-col sm:flex-row justify-center '>
				<div className='w-[100%] sm:hidden mb-5 flex justify-center'>
					<Image src='/ssl.jpg' height={350} width={353} alt='rwd' />
				</div>
				<div className='flex flex-col justify-center sm:w-[50%]'>
					<h1 className='text-2xl sm:text-3xl mb-3'>
						Certyfikat{''}
						<span className='text-main-color'> SSL </span> (Secure
						Sockets Layer):
						<p className='text-lg sm:text-xl sm:mb-3'>
							Klucz do Bezpiecznej i Zaufanej Strony Internetowej
						</p>
					</h1>
				</div>
				<div className='hidden w-[30%] sm:block'>
					<Image
						src='/ssl-long.png'
						height={491}
						width={491}
						alt='rwd'
					/>
				</div>
			</div>
			<div className='mt-5 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Czym Jest Certyfikat SSL?
				</h2>
				<p className='mt-2'>
					Certyfikat SSL to technologia kryptograficzna, która
					zapewnia szyfrowane połączenie między przeglądarką
					użytkownika a serwerem internetowym. Oznacza to, że dane
					przesyłane między użytkownikiem a serwerem są zabezpieczone
					i nie mogą zostać przechwycone przez nieautoryzowane osoby.
				</p>
			</div>
			<div className=' mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Dlaczego Certyfikat SSL Jest Takie Istotny?
				</h2>
				<h3 className='mt-2'>1. Bezpieczeństwo Danych</h3>
				<p className='mt-2'>
					Certyfikat SSL chroni dane przesyłane między użytkownikiem a
					serwerem, co jest kluczowe dla bezpieczeństwa informacji,
					takich jak dane osobowe czy dane płatnicze.
				</p>
				<h3 className='mt-2'>2. Zaufanie Użytkowników</h3>
				<p className='mt-2'>
					Strony internetowe z certyfikatem SSL są oznaczone jako
					bezpieczne w przeglądarkach internetowych, co buduje
					zaufanie użytkowników. To może wpłynąć na zwiększenie
					konwersji i zaufania do twojej marki.
				</p>
				<h3 className='mt-2'>3. SEO</h3>
				<p className='mt-2'>
					Wyszukiwarki, takie jak Google, faworyzują strony z
					certyfikatem SSL, co może wpłynąć na wyższe pozycje w
					wynikach wyszukiwania.
				</p>
			</div>
			<div className='mt-10 text-md xl:mx-40 xl:text-lg '>
				<h2 className='font-semibold text-xl'>
					Jak Otrzymać Certyfikat SSL?
				</h2>
				<h3 className='mt-2'>1. Wybierz Dostawcę: </h3>
				<p className='mt-2'>
					Wybierz dostawcę certyfikatów SSL, taki jak Let&apos;s
					Encrypt, Comodo, DigiCert itp.
				</p>
				<h3 className='mt-2'>2. Zamów Certyfikat: </h3>
				<p className='mt-2'>
					Zamów certyfikat SSL od wybranego dostawcy. Możesz wybrać
					różne rodzaje certyfikatów, w zależności od swoich potrzeb.
				</p>
				<h3 className='mt-2'>3. Zainstaluj Certyfikat:</h3>
				<p className='mt-2'>
					Zainstaluj certyfikat SSL na swoim serwerze internetowym.
					Może to wymagać pomocy administratora lub dostawcy hostingu.
				</p>
				<h3 className='mt-2'>4. Skonfiguruj Stronę:</h3>
				<p className='mt-2'>
					Po zainstalowaniu certyfikatu SSL, skonfiguruj swoją stronę
					internetową, aby działała przez protokół HTTPS.
				</p>
			</div>
			<div className='my-10 text-md xl:mx-40 xl:text-lg '>
				<p className='mt-2'>
					Certyfikat SSL to kluczowy element każdej bezpiecznej strony
					internetowej. Działa on jak &quot;pieczęć zaufania&quot; dla
					użytkowników, informując ich, że mogą bezpiecznie korzystać
					z twojej strony. Dlatego niezależnie od tego, czy prowadzisz
					sklep internetowy, blog czy stronę firmową, certyfikat SSL
					to inwestycja w bezpieczeństwo i zaufanie użytkowników.
				</p>
			</div>
		</section>
	);
};

export default page;
