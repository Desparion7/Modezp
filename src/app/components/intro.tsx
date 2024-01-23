'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImCheckmark } from 'react-icons/im';
import OrangeButton from '@/ui/orange-button';

const Intro = () => {
	return (
		<section>
			<div className='relative flex flex-col justify-center items-center h-[22rem]'>
				<Image
					src='/internet.PNG'
					width={1000}
					height={500}
					alt='internet'
					className='absolute w-screen h-[100%] z-[-3]'
				/>
				<motion.h1
					className='relative uppercase sm:text-xl text-center lg:text-5xl font-bold p-4 mb-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					Nowoczesna strona dla Twojego biznesu
				</motion.h1>
				<motion.ul
					className='relative flex flex-col lg:flex-row text-sm gap-3 mb-4 lg:gap-6 text-white uppercase'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<li className='flex justify-center items-center gap-3 p-3 font-semibold text-sm md:text-lg'>
						<ImCheckmark className='text-blue-500' /> Wyjątkowe
						grafiki
					</li>
					<li className='flex justify-center items-center gap-3 p-3 font-semibold text-sm md:text-lg'>
						<ImCheckmark className='text-blue-500' />
						Stałe wsparcie
					</li>
					<li className='flex justify-center items-center gap-3 p-3 font-semibold text-sm md:text-lg'>
						<ImCheckmark className='text-blue-500' /> Najnowsze
						technologie
					</li>
				</motion.ul>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<OrangeButton>Bezpłatna konsultacja</OrangeButton>
				</motion.div>
				<div className='absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-[-2]' />
			</div>
		</section>
	);
};

export default Intro;
