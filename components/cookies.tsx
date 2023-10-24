'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Cookies = () => {
	const [cookies, setCookies] = useState(true);

	useEffect(() => {
		const cookiesInfo = window.localStorage.getItem('cookies');
		if (cookiesInfo === 'hide') setCookies(false);
	}, []);

	const handleCookies = () => {
		setCookies(false);
		window.localStorage.setItem('cookies', 'hide');
	};
	return (
		<AnimatePresence>
			{cookies && (
				<motion.div
					className='fixed bg-gray-200 text-black dark:bg-[#111827] dark:text-white p-3 px-20 right-0 bottom-0 w-[30%] rounded'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
				>
					<Image
						src='/image/cookies.PNG'
						width={80}
						height={80}
						alt='cookies'
					/>
					<p className='text-center lg:text-lg mb-3 font-semibold text-blue-600'>
						Twoja prywatność
					</p>
					<p className='tracking-wide'>
						Ta strona wykorzystuje pliki cookies. Informacje te
						wykorzystywane są tylko do celów statystycznych w celu
						usprawnienia działania serwisu.
						<Link href='polityka'>
							<span className='text-blue-600 hover:text-blue-800 transition'>
								{' '}
								Dowiedz się więcej
							</span>
						</Link>
					</p>
					<div className='text-center flex justify-center'>
						<button
							onClick={handleCookies}
							className='m-5 p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition'
						>
							Akceptuje
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Cookies;
