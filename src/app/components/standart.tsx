'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Standart = () => {
	return (
		<motion.div
			className={`mb-3 py-6 sm:mb-5 sm:py-12 grid grid-cols-12 ${styles.gradient}`}
			initial={{ x: -200, opacity: 0 }}
			transition={{ duration: 0.5 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
		>
			{/* h3 for mobile */}
			<h3 className='text-xl sm:hidden col-span-12 mb-3 text-center uppercase  text-main-color font-semibold bg-white'>
				Indywidualne podejście
			</h3>
			<div className='col-span-12 col-start-5 sm:col-span-2 sm:col-start-2 flex items-center'>
				<div className='relative w-[50%] sm:w-[100%] h-auto'>
					<Image
						src='/indywidualne.PNG'
						width={500}
						height={500}
						sizes='100vw'
						alt='ikona indywidualne podejscie'
					/>
				</div>
			</div>
			<div className='col-span-10 col-start-2 sm:col-span-7 sm:col-start-5 sm:font-medium  items-center flex justify-center'>
				<div className='w-full lg:max-w-[600px] items-center'>
					{/* h3 for desktop */}
					<h3 className='hidden sm:block text-xl sm:text-2xl lg:text-3xl mb-3 text-center uppercase text-main-color font-semibold '>
						Indywidualne podejście
					</h3>
					<div className='relative'>
						<p className='tracking-widest text-sm text-center lg:leading-8  sm:text-base lg:text-lg sm:mt-8 shadow-2xl px-[10px] py-[15px] z-[10] bg-white '>
							Każdy kursant uczy się w innym tempie i ma inne
							doświadczenia oraz predyspozycje.{' '}
							<span className='text-main-color border-main-color'>
								OSK ELO
							</span>{' '}
							dostosowuje program i metody szkoleniowe do
							indywidualnych potrzeb, aby każdy uczestnik mógł
							osiągnąć najlepsze rezultaty. Instruktorzy
							zapewniają dodatkowe wsparcie osobom, które tego
							potrzebują. Kursanci, którzy szybko przyswajają
							materiał mają zapewnione dodatkowe wyzwania.
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Standart;
