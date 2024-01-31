'use client';
import React, { useState } from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MenuToggleButton from '@/ui/menu-toggle-button';
import Path from '@/ui/svg-path';
import styles from './style.module.css';

const Header = () => {
	const { scrollY } = useScroll();

	const [menuVisible, setMenuVisible] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [servicesVisible, setServicesVisible] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && previous > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const handleToggleMenu = () => {
		setMenuVisible((prev) => {
			!prev
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto');
			return !prev;
		});
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
				className='absolute flex justify-center w-[100vw] h-20  z-10 top-0  bg-black text-white bg-opacity-80'
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
							<motion.div
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
								className='ml-[1rem] sm:ml-0 w-[6rem] sm:w-[8rem] h-auto'
							>
								<Image
									src='/logo.PNG'
									alt='logo'
									width={245}
									height={229}
									priority
								/>
							</motion.div>
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
									className='lg:text-md hover:text-main-color transition-colors'
								>
									<Link href={link.hash}>{link.name} </Link>
								</motion.li>
							))}
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 5,
									},
								}}
								onMouseLeave={() => setServicesVisible(false)}
							>
								<div
									className='relative flex items-center justify-center gap-2 lg:text-md '
									onMouseEnter={() =>
										setServicesVisible(true)
									}
								>
									<p>Usługi</p>
									<svg
										width='20'
										height='20'
										viewBox='0 0 30 30'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<Path d='M6 9L12 15L18 9' />
									</svg>
								</div>
								{servicesVisible && (
									<motion.div
										initial={{
											opacity: 0,
											translateY: '-10px',
											translateX: '-100px',
										}}
										animate={{
											opacity: 1,
											translateY: 0,
										}}
										transition={{ duration: 0.5 }}
										className={`absolute flex flex-col gap-3 p-3 pt-5 text-white lg:text-md  ${styles['shadow-bg']}`}
									>
										<Link
											href='/uslugi/strona-internetowa/next-js'
											className='hover:text-main-color transition-colors'
										>
											Strona internetowa
										</Link>
										<Link
											href='/uslugi/sklep'
											className='hover:text-main-color transition-colors'
										>
											Sklep internetowy
										</Link>
										<Link
											href='/uslugi/logo'
											className='hover:text-main-color transition-colors'
										>
											Logo firmy
										</Link>
									</motion.div>
								)}
							</motion.li>
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 6,
									},
								}}
							>
								<motion.button
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.1 },
									}}
									className='bg-button-background text-white  py-3 px-6 rounded-3xl  hover:bg-button-background-hover transition-all uppercase'
								>
									Darmowa konsultacja
								</motion.button>
							</motion.li>
						</motion.ul>
					</div>
					<motion.div
						className='relative lg:hidden pr-2 py-4 mr-2 sm:pr-3 z-30'
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
