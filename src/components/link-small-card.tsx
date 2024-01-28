'use client';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type LinkSmallCardType = {
	active?: boolean;
	title: string;
	link: string;
};

const LinkSmallCard = ({ active, title, link }: LinkSmallCardType) => {
	return (
		<Link href={link}>
			<motion.div
				className={cn(
					'relative flex justify-center items-center  p-4 h-[100%] min-h-[10rem] w-[8rem] bg-black bg-opacity-60 shadow-sm shadow-main-color group',
					// { 'shadow-lg': active }
				)}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.1 },
				}}
			>
				<h3
					className={cn(
						'text-center text-md group-hover:text-main-color',
						{
							'text-main-color': active,
						}
					)}
				>
					{title}
				</h3>
				<div className='absolute bottom-4 right-4'>
					<FaArrowRightLong className='text-main-color' />
				</div>
			</motion.div>
		</Link>
	);
};

export default LinkSmallCard;
