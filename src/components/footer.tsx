'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaMobileScreen } from 'react-icons/fa6';

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			className='absolute flex justify-around items-center min-w-[100%] min-h-[5%] bg-opacity-60 z-11 py-2 bottom-0  bg-black text-white'
		>
			<div className='container flex flex-row sm:flex-row text-sm justify-between mx-10 sm:mx-20 text-center w-[100%] uppercase'>
				<div className='flex justify-around  sm:gap-5'>
					<Link
						href='/blog'
						className='hover:text-main-color transition-colors'
					>
						Blog
					</Link>
					<Link
						href='/polityka'
						className='hidden sm:block hover:text-main-color transition-colors'
					>
						Polityka prywatności
					</Link>
				</div>
				<div className='flex items-center gap-2'>
					<FaMobileScreen />
					<p>+48 796 390 226</p>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;

{
	/* <div className='flex flex-col sm:flex-row gap-2 text-sm text-center items-center  h-[100%]'>
<Link href='/'>
	<div className='w-[50px] h-auto'>
		<Image
			src='/logo.PNG'
			alt='logo'
			width={480}
			height={189}
			priority
		/>
	</div>
</Link>
<p>Copyright ©{year} Modezp.</p>
</div> */
}
