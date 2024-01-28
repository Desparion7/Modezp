'use client';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';
import React from 'react';


const ScrollDownBtn = () => {
	const scrolltoHash = function () {
		const element = document.getElementById('second-section');
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	};
	return (
		<motion.button
			className='bg-black bg-opacity-55 p-4 rounded-[50%] border-2 border-main-color '
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.1 },
			}}
			onClick={scrolltoHash}
		>
			<motion.div
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.1 },
				}}
			>
				<FaArrowDownLong className='text-xl text-main-color' />
			</motion.div>
		</motion.button>
	);
};

export default ScrollDownBtn;
