import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type MobileMenuProps = {
	handleToggleMenu: () => void;
	menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
	const handleCloseMenu = () => {
		handleToggleMenu();
	};

	return (
		<nav className='absolute uppercase lg:hidden '>
			<AnimatePresence>
				{menuVisible && (
					<motion.div
						className='bg-black bg-opacity-20 w-screen h-screen'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseMenu}
					>
						<motion.div
							className='absolute bg-[#e0f2fe] h-screen w-[100%] left-0 z-[20]'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
							onClick={(event) => {
								event.stopPropagation();
							}}
						>
							<ul className='flex flex-col gap-5 text-black text-md p-10  mt-10'>
								{links.map((link) => (
									<li
										key={link.hash}
										className='hover:text-blue-500 transition'
									>
										<Link
											href={link.hash}
											onClick={handleCloseMenu}
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
							<div className='flex justify-center'>
								<Image
									src='/logo.PNG'
									alt='logo'
									width={150}
									height={150}
									className='absolute bottom-10'
									priority
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileMenu;
