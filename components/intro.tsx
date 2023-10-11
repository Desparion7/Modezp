'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImCheckmark } from 'react-icons/im';

const Intro = () => {
	return (
		<section>
			<div className='relative flex flex-col gap-[3rem] justify-center items-center h-[22rem]'>
				<Image
					src='/image/internet.PNG'
					width={1000}
					height={500}
					alt='internet'
					className='absolute w-screen h-[100%]'
				/>
				<motion.h1
					className='relative uppercase sm:text-xl text-center lg:text-3xl text-white font-bold p-4  bg-black  bg-opacity-60'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					Nowoczesne strony dla Twojego biznesu.
				</motion.h1>
				<motion.ul
					className='relative flex flex-col lg:flex-row text-sm gap-3 lg:gap-6 text-white uppercase'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<li className='flex justify-center items-center gap-3 bg-black  bg-opacity-60 p-3 font-semibold'>
						<ImCheckmark className='text-blue-500 text-xl' />{' '}
						Wyjątkowe grafiki
					</li>
					<li className='flex justify-center items-center gap-3 bg-black  bg-opacity-60 p-3 font-semibold'>
						<ImCheckmark className='text-blue-500 text-xl' />
						Stałe wsparcie
					</li>
					<li className='flex justify-center items-center gap-3 bg-black  bg-opacity-60 p-3 font-semibold'>
						<ImCheckmark className='text-blue-500 text-xl' />{' '}
						Najnowsze technologie
					</li>
				</motion.ul>
			</div>
		</section>
	);
};

export default Intro;
