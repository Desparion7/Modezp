import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='flex justify-around items-center w-[100%] min-h-[5%] bg-opacity-95 z-10 bottom-0  bg-[#111827] text-white'>
			<Link href='/'>
				<Image
					src='/logo.PNG'
					alt='logo'
					width={180}
					height={200}
					priority
				/>
			</Link>
			<p className='text-sm'>
				Copyright ©{year} Modezp. All rights reserved
			</p>
			<div className='flex justify-between w-[30%]'>
				<Link
					href='/kontakt'
					className='hover:text-blue-500 transition-colors'
				>
					Kontakt
				</Link>
				<Link
					href='/polityka'
					className='hover:text-blue-500 transition-colors'
				>
					Polityka prywatności
				</Link>
				<Link
					href='/blog'
					className='hover:text-blue-500 transition-colors'
				>
					Blog
				</Link>
			</div>
		</div>
	);
};

export default Footer;
