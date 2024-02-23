import Link from 'next/link';
import React from 'react';
import { FaMobileScreen } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer className='absolute flex justify-around items-center min-w-[100%] z-11 py-2 lg:py-4 bottom-0  bg-black text-white'>
			<div className='container flex flex-col sm:flex-row text-sm lg:text-xl justify-between mx-10 sm:mx-20 sm:text-center w-[100%] uppercase'>
				<div className='flex flex-col sm:flex-row justify-around  sm:gap-5'>
					<Link
						href='/blog'
						className='hover:text-main-color transition-colors'
					>
						Blog
					</Link>
					<Link
						href='/polityka-prywatnosci'
						className='hover:text-main-color transition-colors'
					>
						Polityka prywatności
					</Link>
				</div>
				<a
					href='https://www.facebook.com/profile.php?id=61556577959946'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-main-color transition-colors'
				>
					Facebook
				</a>
				<div className='flex items-center gap-2'>
					<FaMobileScreen />
					<p>+48 796 390 226</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
