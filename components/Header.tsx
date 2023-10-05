import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='flex justify-between m-3 mt-5'>
			<Image src='/image/logo.PNG' alt='logo' width={180} height={200} />
			<nav className='fixed bg-[#e0f2fe py-4 px-5 rounded-full right-20 font-semibold'>
				<ul className='flex gap-6 uppercase'>
					{links.map((link) => (
						<li key={link.hash}>
							<Link href={link.hash}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
