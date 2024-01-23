import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='flex justify-around items-center w-[100%] min-h-[5%] bg-opacity-95 z-10 bottom-0  bg-gradient-to-r from-blue-100 to-cyan-100 text-black'>
			<div>
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
				<div className='flex flex-col sm:flex-row gap-2 text-sm text-center mb-2'>
					<p>Copyright ©{year} Modezp.</p>
					<p>All rights reserved</p>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-around text-center w-[50%] uppercase'>
				<Link
					href='/kontakt'
					className='hover:text-blue-700 transition-colors'
				>
					Kontakt
				</Link>
				<Link
					href='/blog'
					className='hover:text-blue-700 transition-colors'
				>
					Blog
				</Link>
				<Link
					href='/polityka'
					className='hover:text-blue-700 transition-colors'
				>
					Polityka prywatności
				</Link>
			</div>
		</div>
	);
};

export default Footer;
