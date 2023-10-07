'use client';
import React, { useState } from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const Header = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMenuVisible((prev) => !prev);
	};
	return (
		<header className='fixed flex justify-center w-[100%] bg-[#e0f2fe] bg-opacity-60'>
			<div className='absolute w-screen h-10 bg-blue-600 t-0'></div>
			<nav className='container flex justify-between mx-2 py-2 mt-10'>
				<Link href='/'>
					<Image
						src='/image/logo.PNG'
						alt='logo'
						width={180}
						height={200}
						priority
					/>
				</Link>
				<div className='hidden lg:block py-4 px-5 font-semibold'>
					<ul className='flex gap-6 uppercase'>
						{links.map((link) => (
							<li key={link.hash}>
								<Link href={link.hash}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<button
					onClick={handleToggleMenu}
					className='lg:hidden py-4 pr-10 sm:pr-3'
				>
					<FiMenu className='text-3xl cursor-pointer hover:text-gray-600' />
				</button>
			</nav>
			<MobileMenu
				handleToggleMenu={handleToggleMenu}
				menuVisible={menuVisible}
			/>
		</header>
	);
};

export default Header;
