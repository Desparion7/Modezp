'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
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
					initial={{ x: 100, scale: 0 }}
					animate={{ x: 0, scale: 1 }}
					transition={{ delay: 0.5 }}
				>
					Nowoczesne strony dla Twojego biznesu.
				</motion.h1>
				<motion.ul
					className='relative flex flex-col lg:flex-row text-sm gap-3 lg:gap-6 text-white uppercase'
					initial={{ x: 100, scale: 0 }}
					animate={{ x: 0, scale: 1 }}
					transition={{ delay: 0.5 }}
				>
					<li className=' bg-black  bg-opacity-60 p-3 font-semibold'>
						Wyjątkowe grafiki
					</li>
					<li className=' bg-black  bg-opacity-60 p-3 font-semibold'>
						Stałe wsparcie
					</li>
					<li className=' bg-black  bg-opacity-60 p-3 font-semibold'>
						Najnowsze technologie
					</li>
				</motion.ul>
			</div>
		</section>
	);
}
