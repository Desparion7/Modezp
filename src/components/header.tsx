'use client';
import React, { useState } from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MenuToggleButton from '@/ui/menu-toggle-button';
import OrangeButton from '@/ui/orange-button';

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
			<motion.header
				className='sticky flex justify-center w-[100%] bg-opacity-95 z-10 top-0  bg-[#111827] text-white'
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
								src='/logo.PNG'
								alt='logo'
								width={180}
								height={200}
								priority
							/>
						</Link>
					</motion.div>
					<div className='hidden lg:flex items-center py-4 px-5 font-semibold'>
						<motion.ul className='flex gap-6 uppercase items-center'>
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
							<motion.li
								variants={fadeInAnimationVariants}
								initial='initial'
								animate='animate'
							>
								<OrangeButton>Darmowa konsultacja</OrangeButton>
							</motion.li>
						</motion.ul>
					</div>
					<motion.div
						className='relative lg:hidden py-4 mr-2 sm:pr-3 z-30'
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