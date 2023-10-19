'use client';
import React, { useState } from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MenuToggleButton from '@/components/ui/menu-toggle-button';
import DarkModeButton from '@/components/ui/dark-mode-button';

const Header = () => {
	const { scrollY } = useScroll();

	const [menuVisible, setMenuVisible] = useState(false);
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && previous > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const handleToggleMenu = () => {
		setMenuVisible((prev) => !prev);
	};
	const fadeInAnimationVariants = {
		initial: { opacity: 0, y: -50 },
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index,
			},
		}),
	};
	return (
		<>
			{/* <div className='hidden lg:block h-10 gradient t-0'></div> */}
			<motion.header
				className='sticky flex justify-center w-[100%] bg-[#e0f2fe] bg-opacity-95 z-10 top-0  dark:bg-[#111827] dark:text-white'
				variants={{
					visible: { y: 0 },
					hidden: { y: -200 },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<nav className='container mx-auto flex justify-between py-2'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Link href='/'>
							<Image
								src='/image/logo.PNG'
								alt='logo'
								width={180}
								height={200}
								priority
							/>
						</Link>
					</motion.div>
					<div className='hidden lg:flex items-center py-4 px-5 font-semibold'>
						<motion.ul className='flex gap-6 uppercase'>
							{links.map((link, index) => (
								<motion.li
									key={link.hash}
									variants={fadeInAnimationVariants}
									initial='initial'
									animate='animate'
									custom={index}
									className='hover:text-blue-500 transition-colors'
								>
									<Link href={link.hash}>{link.name} </Link>
								</motion.li>
							))}
							<DarkModeButton />
						</motion.ul>
					</div>
					<motion.div
						className='relative lg:hidden py-4 pr-5 sm:pr-3 z-30'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<MenuToggleButton
							isMenuVisible={menuVisible}
							toggle={handleToggleMenu}
						/>
					</motion.div>
				</nav>
				<MobileMenu
					handleToggleMenu={handleToggleMenu}
					menuVisible={menuVisible}
				/>
			</motion.header>
		</>
	);
};

export default Header;
