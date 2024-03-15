'use client';
import Image from 'next/image';
import Portfolio from '../components/portfolio';
import { motion } from 'framer-motion';
const Realizations = () => {
	return (
		<div className='overflow-x-hiddengit a'>
			<div className='flex flex-col xl:flex-row justify-between items-center gap-5 xl:container mx-auto mt-10 sm:mt-28'>
				<div className='relative order-2 xl:order-1 mt-5 '>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
					>
						<Image
							src={'/screen-credo.png'}
							height={1980}
							width={1280}
							alt='laptop'
							className='w-[60rem] sm:translate-x-[5rem]'
						/>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.5,
						}}
						className='absolute w-[8rem] custom321:w-[10rem] sm:w-[14rem] lg:w-[18rem] bottom-[1rem] sm:bottom-[4rem] xl:bottom-[2rem] right-0  xl:right-[-8rem]'
					>
						<motion.div
							animate={{
								rotate: [0, 5, -5, 0],
								y: [0, 3, -10, 0],
							}}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'loop',
							}}
						>
							<Image
								src={'/sunglasses2.png'}
								height={550}
								width={512}
								alt='okulary przeciwsłoneczne'
							/>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.5,
						}}
						className='absolute w-[10rem] custom321:w-[14rem] custom450:w-[16rem] sm:w-[20rem] lg:w-[24rem] xl:w-[26rem] bottom-[2rem] custom450:bottom-[4rem] left-[-3rem] xl:left-0  z-[-1]'
					>
						<Image
							src={'/backpack.png'}
							height={900}
							width={995}
							alt='plecak'
						/>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.5,
						}}
						className='absolute w-[8rem] custom321:w-[10rem] custom450:w-[12rem] sm:w-[14rem] md:w-[18rem] lg:w-[20rem] xl:w-[18rem] 2xl-w[22rem] top-[-3rem] xl:top-[-8rem] left-[2rem] sm:left-[6rem] md:left-[8rem] xl:left-[12rem]  rotate-45'
					>
						<motion.div
							animate={{
								rotate: [0, -5, 5, 0],
								y: [0, 3, -4, 0],
							}}
							transition={{
								duration: 8,
								ease: 'linear',
								repeat: Infinity,
								repeatType: 'loop',
							}}
						>
							<Image
								src={'/hat.png'}
								height={700}
								width={700}
								alt='słomiany kapelusz'
							/>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 0.5,
						}}
						className='absolute w-[5rem] custom321:w-[6.5rem] custom450:w-[8rem] sm:w-[10rem] lg:w-[12rem] xl:w-[12rem] 2xlw-[14rem] top-[-2rem] xl:top-[-6rem] right-[3rem]  xl:right-[-2rem]'
					>
						<motion.div
							animate={{
								rotate: [0, -6, 7, 0],
								y: [0, -5, 5, 0],
							}}
							transition={{
								duration: 8,
								ease: 'linear',
								repeat: Infinity,
								repeatType: 'loop',
							}}
						>
							<Image
								src={'/phone.png'}
								height={449}
								width={511}
								alt='telefon komórkowy'
								className='rotate-[-40deg]'
							/>
						</motion.div>
					</motion.div>
				</div>
				<div className='relative text-center  2xl:left-[3rem] xl:order-1'>
					<motion.h2
						className='text-xl sm:text-4xl font-bold'
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							delay: 1,
						}}
					>
						NOWOCZESNE{' '}
						<span className='text-main-color'>STRONY</span> KTÓRE
						ZACHWYCAJĄ ESTETYKĄ{' '}
					</motion.h2>
					<div className='flex flex-col gap-1 sm:gap-3 text-lg sm:text-3xl mt-5 sm:mt-10 font-semibold'>
						<motion.p
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								ease: 'easeOut',
								duration: 0.5,
								delay: 1.5,
							}}
						>
							Nowoczesny{' '}
							<span className='text-main-color uppercase'>
								design
							</span>{' '}
						</motion.p>
						<motion.p
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								ease: 'easeOut',
								duration: 0.5,
								delay: 2,
							}}
						>
							Intuicyjny{' '}
							<span className='text-main-color uppercase'>
								{' '}
								interface
							</span>{' '}
						</motion.p>
						<motion.p
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								ease: 'easeOut',
								duration: 0.5,
								delay: 2.5,
							}}
						>
							Pełna{' '}
							<span className='text-main-color uppercase'>
								responsywność
							</span>{' '}
						</motion.p>
					</div>
				</div>
			</div>
			<Portfolio />
		</div>
	);
};

export default Realizations;
