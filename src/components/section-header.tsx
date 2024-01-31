'use client';
import React from 'react';
import { motion } from 'framer-motion';

type SectionTitleType = {
	children: React.ReactNode;
};
const SectionTitle = ({ children }: SectionTitleType) => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			transition={{ duration: 0.5 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			className='relative mb-5'
		>
			<h2 className='text-2xl md:text-4xl uppercase  font-bold text-third-color border-b-4 border-b-main-color'>
				{children}
			</h2>
		</motion.div>
	);
};

export default SectionTitle;
