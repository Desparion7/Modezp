'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Path from './ui/svg-path';

type StandartProps = {
	name: string;
	imageSrc: string;
	text: string;
};

const Standart = ({ name, imageSrc, text }: StandartProps) => {
	const [show, setShow] = useState(false);

	// const showDetails = show
	// 	? 'h-[100%]'
	// 	: 'h-[0] overflow-hidden transition-all';

	return (
		<div>
			<div className='flex'>
				<motion.svg
					width='40'
					height='40'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					animate={show ? 'open' : 'closed'}
				>
					<Path
						d='M6 9L12 15L18 9'
						variants={{
							closed: { d: 'M6 9L12 15L18 9' },
							open: { d: 'M6 15L12 9L18 15' },
						}}
					/>
				</motion.svg>
				<h3
					className='text-2xl mb-3 cursor-pointer'
					onClick={() => {
						setShow((prev) => !prev);
					}}
				>
					{name}
				</h3>
			</div>
			<motion.div
				className='flex justify-center gap-3 items-center overflow-hidden h-0 mb-5'
				animate={show ? 'open' : 'closed'}
				variants={{
					closed: { height: '0' },
					open: { height: '100%' },
				}}
				transition={{ duration: 0.3 }}
			>
				<Image src={imageSrc} width={100} height={100} alt='icon' />
				<p className='tracking-widest'>{text}</p>
			</motion.div>
		</div>
	);
};

export default Standart;
