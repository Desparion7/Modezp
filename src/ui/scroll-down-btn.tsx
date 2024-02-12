'use client';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';
import React from 'react';
import styles from './styles.module.css';

const ScrollDownBtn = () => {
	const scrolltoHash = function () {
		const element = document.getElementById('second-section');
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	};
	return (
		<div
			className={`absolute flex justify-center items-end lg:items-center  w-[100%] h-[20%] bottom-0 ${styles['shadow-services']}`}
		>
			<motion.button
				aria-label='scroll-down'
				className='bg-black bg-opacity-55 p-2 sm:p-3 lg:p-4 mb-14 sm:mb-6 rounded-[50%] border-2 border-main-color '
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
		</div>
	);
};

export default ScrollDownBtn;
