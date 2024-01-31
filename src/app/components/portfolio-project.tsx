import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

type PortfolioProjectPropsType = {
	side: string;
	backgroundColor: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	title: string;
	text: string;
	textColor: string;
};

const PortfolioProject = ({
	side,
	backgroundColor,
	src,
	alt,
	width,
	height,
	title,
	text,
	textColor,
}: PortfolioProjectPropsType) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

	return (
		<>
			{side === 'right' ? (
				<div
					className={`flex flex-col lg:flex-row w-[100%] ${backgroundColor}`}
				>
					<motion.div
						className='relative mr-auto w-[100%] lg:w-[50%]'
						ref={ref}
						style={{
							scale: scaleProgess,
						}}
					>
						<Image
							src={src}
							alt={alt}
							width={width}
							height={height}
							priority
							sizes='100vw'
						/>
					</motion.div>
					<motion.div
						className={`flex flex-col mx-auto  gap-5 justify-center p-10 lg:w-[50%] ${textColor}`}
						initial={{ opacity: 0, translateX: '-30px' }}
						whileInView={{ opacity: 1, translateX: '0' }}
						transition={{ ease: 'easeOut', duration: 1 }}
					>
						<h2 className='text-md md:text-2xl xl:text-3xl'>
							{title}
						</h2>
						<p className='text-sm md:text-lg xl:text-xl'>{text}</p>
					</motion.div>
				</div>
			) : (
				<div
					className={`relative flex flex-col lg:flex-row w-[100%] ${backgroundColor}`}
				>
					<motion.div
						className={`flex flex-col order-last lg:order-first mx-auto gap-5 justify-center p-10 w-[100%] lg:w-[50%] ${textColor}`}
						initial={{ opacity: 0, translateX: '-30px' }}
						whileInView={{ opacity: 1, translateX: '0' }}
						transition={{ ease: 'easeOut', duration: 1 }}
					>
						<h2 className='text-md md:text-2xl xl:text-3xl'>
							{title}
						</h2>
						<p className='text-sm md:text-lg xl:text-xl'>{text}</p>
					</motion.div>
					<motion.div
						className='relative ml-auto w-[100%] lg:w-[50%]'
						ref={ref}
						style={{
							scale: scaleProgess,
						}}
					>
						<Image
							src={src}
							alt={alt}
							width={width}
							height={height}
							priority
							sizes='100vw'
						/>
					</motion.div>
				</div>
			)}
		</>
	);
};

export default PortfolioProject;
