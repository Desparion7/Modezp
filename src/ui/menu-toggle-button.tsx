'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Path from './svg-path';

type MenuToggleButtonProps = {
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuVisible: boolean;
};

const MenuToggleButton = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
	return (
		<motion.button
			aria-label='toggle menu'
			onClick={() => toggle((prev) => !prev)}
			className='z-[30] lg:hidden'
			animate={isMenuVisible ? 'open' : 'closed'}
		>
			<svg width='30' height='30' viewBox='0 0 33 33'>
				<Path
					d='M 2 9.5 L 30 9.5'
					variants={{
						closed: { d: 'M 2 9.5 L 30 9.5' },
						open: { d: 'M 3 25.5 L 30 2.5' },
					}}
				/>
				<Path
					d='M 2 16.5 L 30 16.5'
					variants={{
						closed: {
							opacity: 1,
							x: 0,
							transition: { delay: 0.125 },
						},
						open: { opacity: 0, x: -100 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					d='M 2 9.5 L 30 9.5'
					variants={{
						closed: { d: 'M 2 23.5 L 30 23.5' },
						open: { d: 'M 3 2.5 L 30 25.346' },
					}}
				/>
			</svg>
		</motion.button>
	);
};

export default MenuToggleButton;
