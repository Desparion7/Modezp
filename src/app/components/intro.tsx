'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import OrangeButton from '@/ui/orange-button';
import Letter from '@/ui/letter';
import ParticlesContainer from '@/ui/particles-container';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';

const Intro = ({}) => {
	const sentence1 = 'Strona'.split('');
	const sentence2 = ' internetowa'.split('');
	const sentence3 = ' dla Twojego biznesu'.split('');

	return (
		<section className='bg-black relative flex justify-center items-center w-[100%] min-h-[85vh] sm:min-h-[91vh] bg-opacity-40'>
			<ParticlesContainer />
			<div className='max-h-[100vh]'>
				<Image
					src='/background.JPG'
					alt='backgorund'
					sizes='100vh'
					quality={80}
					fill
					priority
					className='hidden sm:inline object-cover z-[-3] '
				/>
				<Image
					src='/background-mobile.jpg'
					alt='backgorund-mobile'
					fill
					quality={80}
					objectFit='cover'
					priority
					className='sm:hidden z-[-3]'
				/>
			</div>
			<div className='relative top-[-9vh] flex flex-col justify-center md:items-center h-[100%] w-[100%]'>
				<motion.h2
					className='hidden sm:flex relative uppercase text-xl sm:text-2xl text-center justify-center lg:text-4xl xl:text-5xl font-bold p-4 mb-2 text-white bg-black bg-opacity-80'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					{sentence1.map((letter, index) => (
						<React.Fragment key={index}>
							{letter !== ' ' ? (
								<Letter>{letter}</Letter>
							) : (
								<p>&nbsp;</p>
							)}
						</React.Fragment>
					))}
					{sentence2.map((letter, index) => (
						<React.Fragment key={index}>
							{letter !== ' ' ? (
								<Letter orange={true}>{letter}</Letter>
							) : (
								<p>&nbsp;</p>
							)}
						</React.Fragment>
					))}
					{sentence3.map((letter, index) => (
						<React.Fragment key={index}>
							{letter !== ' ' ? (
								<Letter>{letter}</Letter>
							) : (
								<p>&nbsp;</p>
							)}
						</React.Fragment>
					))}
				</motion.h2>
				<motion.h1
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					className='sm:hidden uppercase text-lg text-center font-bold p-4 mb-2 text-white bg-black bg-opacity-80'
				>
					Strona{' '}
					<span className='text-main-color '>
						&nbsp;internetowa &nbsp;
					</span>{' '}
					dla Twojego biznesu
				</motion.h1>
				<motion.ul
					className='relative flex flex-col lg:flex-row md:text-2xl md:gap-3 mb-4 py-3 lg:gap-6 text-white uppercase top-[2vh] md:top-[5vh] bg-black bg-opacity-80'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<li className='flex justify-center items-center px-3'>
						Wyjątkowe grafiki
					</li>
					<li className='flex justify-center items-center px-3'>
						Stałe wsparcie
					</li>
					<li className='flex justify-center items-center px-3'>
						Najnowsze technologie
					</li>
				</motion.ul>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					className='relative top-[6vh] sm:top-[12vh] flex justify-center'
				>
					<Link href='/konsultacja'>
						<OrangeButton>Bezpłatna konsultacja</OrangeButton>
					</Link>
				</motion.div>
			</div>
			<ScrollDownBtn />
		</section>
	);
};

export default Intro;
