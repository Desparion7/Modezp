'use client';
import { GiWireframeGlobe } from 'react-icons/gi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaShoppingCart, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Page() {
	return (
		<section
			className={`relative flex justify-center items-center w-[100%] h-[100vh] py-20 text-white`}
		>
			<Image
				src='/background2.jpng'
				alt='backgorund'
				sizes='100vw'
				fill
				priority={true}
				className='z-[-3] h-[100vh]'
			/>
			<div className='container flex flex-col xl:flex-row gap-1 lg:gap-5 xl:gap-10 mx-5 xl:mx-10 h-[70vh] xl:h-[50vh]'>
				<div className='flex flex-col gap-1 xl:gap-3 w-[100%] xl:w-[30%] xl:py-20 py-5'>
					<h2 className='uppercase text-xl xl:text-3xl'>
						Nasze <span className='text-main-color'>usługi</span>{' '}
					</h2>
					<p className='xl:hidden text-[1rem]'>
						Tworzymy nowoczesne strony internetowe, które nie tylko
						zachwycają estetyką, ale również są zoptymalizowane pod
						kątem urządzeń mobilnych
					</p>
					<p className='hidden xl:block'>
						Tworzymy nowoczesne strony internetowe, które nie tylko
						zachwycają estetyką, ale również są zoptymalizowane pod
						kątem urządzeń mobilnych, umożliwiają łatwą samodzielną
						edycję. W dzisiejszych czasach posiadanie własnej strony
						internetowej nie jest jedynie formalnością - staje się
						kluczowym elementem sukcesu biznesowego.
					</p>
				</div>
				<div className='w-[100%] xl:w-[70%] flex flex-col xl:flex-row gap-1 xl:gap-5 text-white '>
					<Link
						href='/uslugi/strona-internetowa/next-js'
						className='w-[100%] xl:w-[33%]'
					>
						<motion.div
							className='relative flex flex-col gap-1 xl:gap-3 h-[100%] bg-black xl:bg-opacity-35 bg-opacity-60 p-3 xl:p-4 shadow-sm shadow-main-color'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<GiWireframeGlobe className='text-main-color text-xl xl:text-3xl mb-2' />
							<h3 className='text-sm sm:text-lg xl:text-xl uppercase'>
								<span className='text-main-color'>strony</span>{' '}
								internetowe
							</h3>
							<p className='hidden xl:block'>
								Tworzymy responsywne strony internetowe z
								wykorzystaniem technologii{' '}
								<span className='text-main-color'>Next.js</span>
								, zapewniając szybkie i efektywne działanie oraz
								doskonałą jakość użytkowania.
							</p>
							<div className='flex justify-end gap-2 absolute bottom-3 right-4 xl:bottom-8 xl:right-8'>
								<p className='text-main-color hidden sm:block'>
									Więcej
								</p>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</div>
						</motion.div>
					</Link>
					<Link href='/uslugi/sklep' className='w-[100%] xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col h-[100%] gap-1 xl:gap-3 bg-black xl:bg-opacity-35 bg-opacity-60 5 p-3 xl:p-4cursor-pointer shadow-sm shadow-main-color'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<FaShoppingCart className='text-main-color text-xl xl:text-3xl mb-2' />
							<h3 className='text-sm sm:text-lg xl:text-xl uppercase'>
								<span className='text-main-color'>Sklepy</span>{' '}
								internetowe
							</h3>
							<p className='hidden xl:block'>
								Tworzymy profesjonalne strony sklepów
								internetowych, dostosowane do potrzeb Twojego
								biznesu. Oferujemy kompleksową obsługę, od
								projektowania interfejsu i implementacji funkcji
								zakupowych po optymalizację{' '}
								<span className='text-main-color'>SEO. </span>
							</p>
							<div className='flex justify-end gap-2 absolute bottom-3 right-4 xl:bottom-8 xl:right-8'>
								<p className='text-main-color hidden sm:block'>
									Więcej
								</p>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</div>
						</motion.div>
					</Link>
					<Link href='/uslugi/logo' className='w-[100%] xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col h-[100%] gap-1 xl:gap-3 bg-black xl:bg-opacity-35 bg-opacity-60 p-3 xl:p-4 cursor-pointer shadow-sm shadow-main-color'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<FaPaintBrush className='text-main-color text-xl xl:text-3xl mb-2' />
							<h3 className='text-sm sm:text-lg xl:text-xl uppercase'>
								<span className='text-main-color'>logo</span>{' '}
								firmy
							</h3>
							<p className='hidden xl:block'>
								Tworzymy unikalne i zgodne z wizją marki logo
								dla firm. Nasze projekty łączą kreatywność z
								profesjonalizmem, pomagając w budowaniu
								rozpoznawalności i pozytywnego wizerunku Twojego
								biznesu
							</p>
							<div className='flex justify-end gap-2 absolute bottom-3 right-4 xl:bottom-8 xl:right-8'>
								<p className='text-main-color hidden sm:block'>
									Więcej
								</p>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</div>
						</motion.div>
					</Link>
				</div>
			</div>
			<div
				className={`hidden xl:block absolute  w-[100vw] h-[20%] bottom-0 ${styles['shadow-services']}`}
			></div>
		</section>
	);
}
