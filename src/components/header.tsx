'use client';
import React, { useState } from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MenuToggleButton from '@/ui/menu-toggle-button';
import OrangeButton from '@/ui/orange-button';
import Path from '@/ui/svg-path';

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
				className='sticky flex justify-center w-[100%]  z-10 top-0  bg-[#e0eef8] text-black'
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
							<div className='w-[180px] h-auto'>
								<Image
									src='/logo.PNG'
									alt='logo'
									width={480}
									height={189}
									priority
								/>
							</div>
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
									className='hover:text-blue-700 transition-colors'
								>
									<Link href={link.hash}>{link.name} </Link>
								</motion.li>
							))}
							<motion.li
								variants={fadeInAnimationVariants}
								initial='initial'
								animate='animate'
								onMouseLeave={() => setServicesVisible(false)}
							>
								<div
									className='relative flex items-center justify-center gap-2'
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
											translateY: '-30px',
											translateX: '-100px',
										}}
										animate={{
											opacity: 1,
											translateY: 0,
										}}
										transition={{ duration: 0.5 }}
										className='absolute flex flex-col gap-3 p-3 pt-5 bg-[#e0eef8] text-black'
									>
										<Link
											href='/strony-internetowe'
											className='hover:text-blue-700 transition-colors'
										>
											Strony internetowe
										</Link>
										<Link
											href='/strony-internetowe'
											className='hover:text-blue-700 transition-colors'
										>
											Sklep internetowe
										</Link>
										<Link
											href='/strony-internetowe'
											className='hover:text-blue-700 transition-colors'
										>
											Logo firmy
										</Link>
									</motion.div>
								)}
							</motion.li>
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
