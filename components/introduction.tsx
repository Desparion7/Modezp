'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Introduction = () => {
	return (
		<section className='container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center overflow-hidden'>
			<motion.div
				className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className='text-xl sm:text-2xl md:text-3xl uppercase mb-5'>
					Strony internetowe
				</h2>
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
				className='relative w-[100%] md:w-[50%] aspect-video'
				initial={{ x: 200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Image
					src='/image/computer.PNG'
					fill
					alt='computer'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</motion.div>
		</section>
	);
};

export default Introduction;
