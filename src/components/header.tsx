'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MenuToggleButton from '@/ui/menu-toggle-button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
	const url = usePathname();

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
				className='sticky flex justify-center w-[100vw] sm:h-[6.5rem]  z-50 top-0  bg-black text-white'
				variants={{
					visible: { y: 0 },
					hidden: { y: -200 },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
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
								className='ml-[1rem] sm:ml-0 w-[6rem] sm:w-[6rem] h-auto'
							>
								<Image
									src='/logo.png'
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
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 1,
									},
								}}
								className={cn(
									`lg:text-md hover:text-main-color transition-colors`,
									{
										'text-main-color': url === '/',
									}
								)}
							>
								<Link href='/'>OSK ELO</Link>
							</motion.li>
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 1,
									},
								}}
								className={cn(
									`lg:text-md hover:text-main-color transition-colors`,
									{
										'text-main-color':
											url === '/jak-zaczac',
									}
								)}
							>
								<Link href='/'>Jak zacząć?</Link>
							</motion.li>
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 2,
									},
								}}
								className={cn(
									`lg:text-md hover:text-main-color transition-colors`,
									{
										'text-main-color': url === '/kontakt',
									}
								)}
							>
								<Link href='/kontakt'>kontakt</Link>
							</motion.li>
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 3,
									},
								}}
								className={cn(
									`lg:text-md hover:text-main-color transition-colors`,
									{
										'text-main-color': url === '/cennik',
									}
								)}
							>
								<Link href='/cennik'>Cennik</Link>
							</motion.li>
							<motion.li
								variants={fadeInAnimationVariants}
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.05 * 4,
									},
								}}
								className={cn(
									`lg:text-md hover:text-main-color transition-colors`,
									{
										'text-main-color': url === '/blog',
									}
								)}
							>
								<Link href='/blog'>Blog</Link>
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
								<Link href='/formularz-zgloszeniowy'>
									<motion.button
										aria-label='menu'
										whileHover={{
											scale: 1.05,
											transition: { duration: 0.1 },
										}}
										className='relative bg-button-background text-white  py-2.5 px-6 rounded-3xl  hover:bg-button-background-hover transition-all uppercase'
									>
										Zapisz się na kurs
									</motion.button>
								</Link>
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
