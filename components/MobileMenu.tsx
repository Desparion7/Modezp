import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { AnimatePresence, motion } from 'framer-motion';

type MobileMenuProps = {
	handleToggleMenu: () => void;
	menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
	const handleCloseMenu = () => {
		handleToggleMenu();
	};

	return (
		<nav className='absolute uppercase lg:hidden'>
			<AnimatePresence>
				{menuVisible && (
					<motion.div
						className='bg-black bg-opacity-20 w-screen h-screen'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className='absolute  bg-[#e0f2fe] h-screen w-[200px] right-0'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
						>
							<button
								className='absolute flex right-0 mr-3 p-2'
								onClick={handleCloseMenu}
							>
								<CgClose className='text-2xl hover:text-gray-600 transition' />
							</button>
							<ul className='flex flex-col gap-3 text-black text-sm  p-5 mr-2'>
								{links.map((link) => (
									<li key={link.hash}>
										<Link href={link.hash}>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileMenu;
