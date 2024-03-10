'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/section-header';
import { IoMdCheckmark } from 'react-icons/io';

const EndingSection = () => {
	return (
		<section className='relative  mb-20  '>
			<div className='absolute w-full '>
				<Image
					alt=''
					src='/transition-second.png'
					width={1940}
					height={603}
					className='hidden md:inline-block md:absolute w-full h-full min-h-[400px] top-[-100px] '
				/>
				<Image
					alt=''
					src='/mobile-transition-second.png'
					width={320}
					height={403}
					className='absolute w-full top-[0px] md:hidden h-full min-h-[500px]'
				/>
				<Image
					alt=''
					src='/decoration.png'
					width={214}
					height={259}
					className='absolute w-[80px] top-[400px] lg:top-[200px] rotate-45 opacity-60'
				/>
				<Image
					alt=''
					src='/decoration.png'
					width={214}
					height={259}
					className='absolute w-[100px] lg:w-[150px] lg:top-[-100px]  top-[-50px] right-0 opacity-50 rotate-90'
				/>
			</div>
			<div className='container mx-auto py-10 lg:py-20 mb-10 relative '>
				<SectionTitle style='text-main-bright-color border-b-transparent text-center md:text-start mb-10'>
					Co nas wyróżnia?
				</SectionTitle>

				<motion.div
					className=' w-full h-full relative  flex items-center justify-center gap-2 lg:gap-20 flex-col md:flex-row'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<WhyUsCard text='Indywidualne podejście' />
					<WhyUsCard text='Stały kontakt' />
					<WhyUsCard text='Terminowa realizacja' />
				</motion.div>
			</div>
			<motion.div
				className='container left-1/2 relative -translate-x-1/2'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<div className='  relative mt-[100px]  lg:mt-[100px] grid grid-cols-1 lg:grid-cols-2 px-2 gap-5 lg:gap-0 '>
					<div className=' relative  lg:max-w-[500px] flex flex-col gap-1 lg:gap-4 text-center lg:text-start'>
						<h4 className='text-main-color font-bold text-lg lg:text-3xl mb-2'>
							WEB DESIGN & DEVELOPMENT
						</h4>
						<p className='text-base lg:text-xl '>
							Nowoczesne podejście połączone z praktycznością
							gwarantuje, że Państwa witryna będzie doskonale
							przyjęta przez potencjalnych klientów.
						</p>
						<ul className='flex flex-col gap-2  text-base lg:text-2xl items-start px-5 lg:px-0'>
							<li className='flex items-center justify-start'>
								<IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
								<span className='ml-2'>Responsywne</span>
							</li>
							<li className='flex items-center justify-start'>
								<IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
								<span className='ml-2'>Niezwykłe</span>
							</li>
							<li className='flex items-center justify-start'>
								<IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
								<span className='ml-2'>
									Funkcjonalne i intuicyjne
								</span>
							</li>
							<li className='flex items-center justify-start'>
								<IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
								<span className='ml-2'>
									Zgodne z Twoim uznaniem
								</span>
							</li>
						</ul>
					</div>
					<div className=''>
						<div className=''>
							<Image
								alt=''
								src='/desoktop-mobile.png'
								width={571.67}
								height={476.77}
								className=' w-[300px] lg:w-[500px] left-1/2 relative -translate-x-1/2'
							/>
						</div>
					</div>
				</div>
				<Invitation />
			</motion.div>
		</section>
	);
};

export default EndingSection;

type WhyUsCardType = {
	text: string;
};
export const WhyUsCard = ({ text }: WhyUsCardType) => {
	return (
		<div className='bg-main-bright-color w-[90%] h-[100px] lg:w-[330px] lg:h-[200px] rounded-[200px] flex justify-center items-center shadow-2xl px-[10px] py-[15px]'>
			<p className='text-base lg:text-xl xl:text-2xl font-semibold'>
				{text}
			</p>
		</div>
	);
};
export const Invitation = () => {
	return (
		<div className='  py-10 text-center lg:text-start px-2'>
			<p className='text-main-color font-bold text-base md:text-lg  lg:text-3xl mb-2 lg:mb-4 '>
				POTRZEBUJESZ STRONY INTERNETOWEJ?
			</p>
			<p className='text-sm lg:text-xl max-w-[700px]  lg:px-0 '>
				Całość formalności możemy dopełnić drogą telefoniczną lub
				e-mailową. Dzięki temu oszczędzisz swój czas oraz pieniądze.
				Zachęcamy do skontaktowania się z nami.
			</p>
			<Link href='/formularz-zgloszeniowy'>
				<motion.button
					whileTap={{ scale: 0.95 }}
					whileHover={{
						scale: 1.05,
					}}
					className='relative bg-button-background text-white  py-2.5 px-6 rounded-3xl  hover:bg-button-background-hover transition-all uppercase mt-5 font-semibold'
				>
					Formularz zgłoszeniowy{' '}
				</motion.button>
			</Link>
		</div>
	);
};
