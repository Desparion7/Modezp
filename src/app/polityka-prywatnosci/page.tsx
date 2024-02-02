import SectionTitle from '@/components/section-header';
import React from 'react';

const page = () => {
	return (
		<div>
			<section className='relative container mx-auto py-20 min-h-[65vh] '>
				<div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Polityka prywatności</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className=''>
								Korzystanie ze strony internetowej
								https://modezp.com/ oznacza akceptację
								poniższych warunków polityki prywatności
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Jako Użytkownik zapoznaj się z jej postanowieniami.
							Poniższy spis treści pomoże Ci w tym. Informujemy
							Cię w niej, w jaki sposób troszczymy się o dane
							Użytkowników, jak je przetwarzamy, komu je
							powierzamy i o wielu innych ważnych kwestiach
							związanych z danymi osobowymi.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>Badania</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Następnie przeprowadzamy badania rynkowe, które
							obejmują analizę konkurencji, trendów branżowych i
							preferencji grupy docelowej. Celem jest uzyskanie
							głębszego zrozumienia sektora, w którym działa
							klient, oraz uniknięcie przypadkowego naśladowania
							innych znanych marek.
						</p>
					</div>
					<div className='mt-5'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							<span className='font-bold'>
								Tworzenie koncepcji
							</span>
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Na tym etapie projektant tworzy różnorodne koncepcje
							graficzne. Pomysły te są generowane na podstawie
							zebranych informacji i twórczej interpretacji
							briefu. Często używa się szkiców ręcznych, aby
							szybko eksplorować różne pomysły.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
