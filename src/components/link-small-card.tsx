'use client';
import Link from 'next/link';
import React from 'react';
import { FaArrowUpLong, FaArrowRightLong } from 'react-icons/fa6';
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
					'relative flex justify-between md:justify-center items-center z-10  p-4 md:h-[100%] md:min-h-[10rem] md:w-[8rem] bg-black bg-opacity-60 group ',
					{
						'sm:scale-105 cursor-default shadow-sm shadow-main-color':
							active,
					}
				)}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				whileHover={
					active
						? {}
						: {
								scale: 1.05,
								transition: { duration: 0.1 },
						  }
				}
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
				<motion.div className='md:absolute bottom-4 right-4'>
					{!active && (
						<FaArrowUpLong className='hidden sm:block text-main-color group-hover:rotate-90 duration-300' />
					)}
					<FaArrowRightLong className='sm:hidden text-main-color' />
				</motion.div>
			</motion.div>
		</Link>
	);
};

export default LinkSmallCard;
