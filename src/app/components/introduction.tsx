'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/section-header';

const Introduction = () => {
	return (
		<section className='container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center overflow-hidden gap-5'>
			<motion.div
				className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<SectionHeader>Strony internetowe</SectionHeader>
				<p className='sm:text-lg md:text-xl tracking-wider mx-2 sm:mx-0'>
					Tworzymy nowoczesne strony internetowe, które nie tylko
					zachwycają estetyką, ale również są zoptymalizowane pod
					kątem urządzeń mobilnych, umożliwiają łatwą samodzielną
					edycję. W dzisiejszych czasach posiadanie własnej strony
					internetowej nie jest jedynie formalnością - staje się
					kluczowym elementem sukcesu biznesowego.
				</p>
			</motion.div>
			<motion.div
				className='relative block w-[90%] md:w-[40%] aspect-video mx-3'
				initial={{ x: 200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Image
					src='/computer.PNG'
					fill
					alt='computer'
					sizes='(min-width: 1540px) 614px, (min-width: 1280px) 512px, (min-width: 1040px) 410px, (min-width: 780px) 307px, (min-width: 680px) 576px, calc(85vw + 15px)'
					className='rounded-md'
				/>
			</motion.div>
		</section>
	);
};

export default Introduction;
