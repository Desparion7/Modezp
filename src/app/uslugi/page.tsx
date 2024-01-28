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
			<div className='container flex gap-5 mx-60 h-[70%]'>
				<div className='flex flex-col gap-3 w-[30%] py-10'>
					<h2 className='uppercase text-3xl'>
						Nasze <span className='text-main-color'>usługi</span>{' '}
					</h2>
					<p>
						Tworzymy nowoczesne strony internetowe, które nie tylko
						zachwycają estetyką, ale również są zoptymalizowane pod
						kątem urządzeń mobilnych, umożliwiają łatwą samodzielną
						edycję. W dzisiejszych czasach posiadanie własnej strony
						internetowej nie jest jedynie formalnością - staje się
						kluczowym elementem sukcesu biznesowego.
					</p>
				</div>
				<div className='w-[70%] flex gap-5 text-white'>
					<Link href='/uslugi/strony-internetowe' className='w-[33%]'>
						<motion.div
							className='relative flex flex-col gap-3 h-[100%] bg-black bg-opacity-35 p-4'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<GiWireframeGlobe className='text-main-color text-3xl mb-2' />
							<h3 className='text-xl uppercase'>
								<span className='text-main-color'>strony</span>{' '}
								internetowe
							</h3>
							<p>
								Tworzymy responsywne strony internetowe z
								wykorzystaniem technologii{' '}
								<span className='text-main-color'>Next.js</span>
								, zapewniając szybkie i efektywne działanie oraz
								doskonałą jakość użytkowania.
							</p>
							<div className='absolute bottom-8 right-8'>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</div>
						</motion.div>
					</Link>
					<Link href='/uslugi/sklep' className='w-[33%]'>
						<motion.div
							className='relative flex flex-col h-[100%] gap-3 bg-black bg-opacity-35 p-4 cursor-pointer'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<FaShoppingCart className='text-main-color text-3xl mb-2' />
							<h3 className='text-xl uppercase'>
								<span className='text-main-color'>Sklepy</span>{' '}
								internetowe
							</h3>
							<p>
								Tworzymy profesjonalne strony sklepów
								internetowych, dostosowane do potrzeb Twojego
								biznesu. Oferujemy kompleksową obsługę, od
								projektowania interfejsu i implementacji funkcji
								zakupowych po optymalizację{' '}
								<span className='text-main-color'>SEO. </span>
							</p>
							<div className='absolute bottom-8 right-8'>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</div>
						</motion.div>
					</Link>
					<Link href='/uslugi/logo' className='w-[33%]'>
						<motion.div
							className='relative flex flex-col h-[100%] gap-3 bg-black bg-opacity-35 p-4 cursor-pointer'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<FaPaintBrush className='text-main-color text-3xl mb-2' />
							<h3 className='text-xl uppercase'>
								<span className='text-main-color'>logo</span>{' '}
								firmy
							</h3>
							<p>
								Tworzymy unikalne i zgodne z wizją marki logo
								dla firm. Nasze projekty łączą kreatywność z
								profesjonalizmem, pomagając w budowaniu
								rozpoznawalności i pozytywnego wizerunku Twojego
								biznesu
							</p>
							<div className='absolute bottom-8 right-8'>
								<FaArrowRightLong className='text-main-color text-2xl' />
							</div>
						</motion.div>
					</Link>
				</div>
			</div>
			<div
				className={`absolute  w-[100vw] h-[20%] bottom-0 ${styles['shadow-services']}`}
			></div>
		</section>
	);
}
