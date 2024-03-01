'use client';
import { GiWireframeGlobe } from 'react-icons/gi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaPaintBrush } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
interface PriceDataItem {
	acf: {
		cena: number; // lub string, jeśli cena jest przechowywana jako tekst
	};
}
interface DataState {
	priceData: PriceDataItem[];
	loading: boolean;
}

export default function Services() {
	const [data, setData] = useState<DataState>({
		priceData: [],
		loading: true,
	});

	useMemo(async () => {
		const response = await fetch(
			'https://modezp.com/wp/wp-json/wp/v2/price?acf_format=standard&_fields=id,title,cena,acf'
		);
		const priceData = await response.json();
		setData({ priceData, loading: false });
	}, []);

	return (
		<section
			className={`relative container mx-auto flex justify-center items-center w-[100%] xl:h-[65vh] py-10 sm:px-5 text-black min-h-[300px]`}
			id='second-section'
		>
			<div className=' flex flex-col xl:flex-row gap-5 xl:gap-10 xl:h-[100%]'>
				<div className='flex flex-col gap-3 xl:w-[30%] xl:py-20 py-5 p-3'>
					<h2 className='uppercase text-xl md:text-3xl'>
						Nasze <span className='text-main-color'>usługi</span>{' '}
					</h2>
					<p className='text-md md:text-lg text-justify'>
						Tworzymy nowoczesne strony internetowe, które nie tylko
						zachwycają estetyką, ale również są zoptymalizowane pod
						kątem urządzeń mobilnych, umożliwiają łatwą samodzielną
						edycję. W dzisiejszych czasach posiadanie własnej strony
						internetowej nie jest jedynie formalnością - staje się
						kluczowym elementem sukcesu biznesowego.
					</p>
				</div>
				<div className='flex flex-col xl:flex-row xl:w-[70%] gap-5 text-white'>
					<div className='xl:w-[33%]'>
						<Link href='/uslugi/strona-internetowa'>
							<motion.div
								className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color  p-4'
								transition={{ ease: 'easeOut', duration: 0.5 }}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
							>
								<div>
									<GiWireframeGlobe className='text-main-color text-3xl mb-2' />
									<h3 className='text-xl uppercase text-center sm:text-left'>
										<span className='text-main-color hover:border-b-2 border-main-color'>
											strony
										</span>{' '}
										internetowe
									</h3>
									<p className='text-justify sm:text-left sm:text-md'>
										Usługa tworzenia stron internetowych,
										dostosowanych do Twoich potrzeb i
										budżetu. Strony tworzymy w Next.js wykorzystując WordPress jako panel do zarządzania.
									</p>
									<p className='text-main-color text-center text-2xl mt-10 pb-5'>
										{data.loading
											? 'Strona już od 800 zł'
											: `Strona już od ${data?.priceData[0].acf.cena} zł`}
									</p>
									<div className='flex justify-end gap-2 xl:absolute bottom-8 right-8'>
										<p
											className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
										>
											Więcej
										</p>
										<FaArrowRightLong className='text-main-color text-2xl' />
									</div>
								</div>
							</motion.div>
						</Link>
					</div>
					<div className='w-[100%] xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color p-4'
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<Link href='/uslugi/strona-internetowa/next-js'>
								<SiNextdotjs className='text-main-color text-3xl mb-2' />
								<h3 className='text-xl uppercase text-center sm:text-left'>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										Przeniesienie stron
									</span>{' '}
									do Next.js
								</h3>

								<p className='text-justify sm:text-left sm:text-md mt-2'>
									Oferujemy profesjonalną usługę przeniesienia
									stron do nowoczesnego frameworka Next.js.
									Dzięki zastosowaniu Next.js, zapewniamy
									lepszą wydajność, zoptymalizowaną SEO oraz
									ulepszoną obsługę serwerową. 
								</p>
								<div className='flex justify-end gap-2 xl:absolute bottom-8 right-8'>
									<p
										className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
									>
										Więcej
									</p>
									<FaArrowRightLong className='text-main-color text-2xl' />
								</div>
							</Link>
						</motion.div>
					</div>
					<div className='w-[100%] xl:w-[33%]'>
						<Link href='/uslugi/logo'>
							<motion.div
								className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color p-4'
								transition={{ ease: 'easeOut', duration: 0.5 }}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
							>
								<FaPaintBrush className='text-main-color text-3xl mb-2' />

								<h3 className='text-xl uppercase text-center sm:text-left '>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										logo
									</span>{' '}
									firmy
								</h3>

								<p className='text-justify sm:text-left sm:text-md'>
									Tworzymy unikalne i zgodne z wizją marki
									logo dla firm. Nasze projekty łączą
									kreatywność z profesjonalizmem, pomagając w
									budowaniu rozpoznawalności i pozytywnego
									wizerunku Twojego biznesu.
								</p>
								<div className='flex justify-end gap-2 xl:absolute bottom-8 right-8'>
									<p
										className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
									>
										Więcej
									</p>
									<FaArrowRightLong className='text-main-color text-2xl' />
								</div>
							</motion.div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
