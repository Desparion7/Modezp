'use client';
import { GiWireframeGlobe } from 'react-icons/gi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaShoppingCart, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
	return (
		<section
			className={`relative flex justify-center items-center w-[100%] xl:h-[65vh] py-10 text-black`}
		>
			<div className='container flex flex-col xl:flex-row gap-5 xl:gap-10 mx-5 xl:mx-10 xl:h-[100%]'>
				<div className='flex flex-col gap-3 xl:w-[30%] xl:py-20 py-5'>
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
				<div className='flex flex-col xl:flex-row xl:w-[70%]  gap-5 text-white'>
					<div className='xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color bg-opacity-35 p-4'
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<GiWireframeGlobe className='text-main-color text-3xl mb-2' />
							<Link href='/uslugi/strona-internetowa/next-js'>
								<h3 className='text-xl uppercase text-center sm:text-left'>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										strony
									</span>{' '}
									internetowe
								</h3>
							</Link>
							<p className='text-center sm:text-left'>
								Tworzymy responsywne strony internetowe z
								wykorzystaniem technologii{' '}
								<Link href='/uslugi/strona-internetowa/next-js'>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										Next.js
									</span>
								</Link>
								, zapewniając szybkie i efektywne działanie oraz
								doskonałą jakość użytkowania.
							</p>
							<Link
								href='/uslugi/strona-internetowa/next-js'
								className='flex justify-end gap-2 xl:absolute bottom-8 right-8'
							>
								<p
									className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
								>
									Więcej
								</p>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</Link>
						</motion.div>
					</div>
					<div className='w-[100%] xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color bg-opacity-35 p-4'
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<FaShoppingCart className='text-main-color text-3xl mb-2' />
							<Link href='/uslugi/sklep'>
								<h3 className='text-xl uppercase text-center sm:text-left'>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										Sklepy
									</span>{' '}
									internetowe
								</h3>
							</Link>
							<p className='text-center sm:text-left'>
								Tworzymy profesjonalne strony sklepów
								internetowych, dostosowane do potrzeb Twojego
								biznesu. Oferujemy kompleksową obsługę, od
								projektowania interfejsu i implementacji funkcji
								zakupowych po optymalizację{' '}
								<Link href='/blog/seo'>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										SEO.{' '}
									</span>
								</Link>
							</p>
							<Link
								href='/uslugi/sklep'
								className='flex justify-end gap-2 xl:absolute bottom-8 right-8'
							>
								<p
									className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
								>
									Więcej
								</p>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</Link>
						</motion.div>
					</div>
					<div className='w-[100%] xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color bg-opacity-35 p-4'
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<FaPaintBrush className='text-main-color text-3xl mb-2' />
							<Link href='/uslugi/logo'>
								<h3 className='text-xl uppercase text-center sm:text-left '>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										logo
									</span>{' '}
									firmy
								</h3>
							</Link>
							<p className='text-center sm:text-left'>
								Tworzymy unikalne i zgodne z wizją marki logo
								dla firm. Nasze projekty łączą kreatywność z
								profesjonalizmem, pomagając w budowaniu
								rozpoznawalności i pozytywnego wizerunku Twojego
								biznesu
							</p>
							<Link
								href='/uslugi/logo'
								className='flex justify-end gap-2 xl:absolute bottom-8 right-8'
							>
								<p
									className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
								>
									Więcej
								</p>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
