'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
		>
			<h2 className='text-xl sm:text-2xl md:text-4xl uppercase mb-5 pb-3 font-bold  border-b-blue-600 border-b-2 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent'>
				{children}
			</h2>
			{/* <h2 className='text-xl sm:text-2xl md:text-4xl uppercase mb-5 pb-3 font-semibold  border-b-blue-600 border-b-2 text-white'>
				{children}
			</h2> */}
		</motion.div>
	);
};

export default SectionHeader;
