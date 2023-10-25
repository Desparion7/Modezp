'use client';
import SectionHeader from '@/components/ui/section-header';
import React from 'react';
import Standart from './standart';
import { standarts } from '@/lib/data';
import { motion } from 'framer-motion';

const Standards = () => {
	return (
		<section className='container mx-auto my-20'>
			<motion.div
				className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 0.5 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				<SectionHeader>Nasze standardy</SectionHeader>
			</motion.div>
			{standarts.map((standart, index) => (
				<Standart
					key={index}
					name={standart.name}
					imageSrc={standart.imageSrc}
					text={standart.text}
				/>
			))}
		</section>
	);
};

export default Standards;
