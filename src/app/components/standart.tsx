'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Path from '@/ui/svg-path';

type StandartProps = {
	name: string;
	imageSrc: string;
	text: string;
};

const Standart = ({ name, imageSrc, text }: StandartProps) => {
	return (
		<motion.div
			className='mb-5'
			initial={{ x: -200, opacity: 0 }}
			transition={{ duration: 0.5 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
		>
			<div className='flex'>
				<svg
					width='40'
					height='40'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<Path d='M6 9L12 15L18 9' />
				</svg>
				<h3 className='text-2xl mb-3 '>{name}</h3>
			</div>
			<div className='flex justify-center gap-3 items-center overflow-hidden  height-[100%]'>
				<Image src={imageSrc} width={100} height={100} alt='icon' />
				<p className='tracking-widest '>{text}</p>
			</div>
		</motion.div>
	);
};

export default Standart;
