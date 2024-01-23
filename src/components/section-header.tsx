'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type SectionHeaderType = {
	children: React.ReactNode;
};
const SectionHeader = ({ children }: SectionHeaderType) => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			transition={{ duration: 0.5 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			className='relative border-b-blue-600 border-b-2 mb-5'
		>
			<h2 className='text-xl sm:text-2xl md:text-4xl uppercase mb-2 pb-3 font-bold  bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent'>
				{children}
			</h2>
			<div className='absolute w-[40px] md:w-[60px] h-auto z-[-10] right-0 top-0'>
				<Image src='/glob.PNG' width={141} height={145} alt='logo' />
			</div>
		</motion.div>
	);
};

export default SectionHeader;
