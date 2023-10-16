'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Cookies = () => {
	const [cookies, setCookies] = useState(true);
	return (
		<AnimatePresence>
			{cookies && (
				<motion.div
					className='fixed bg-white text-black mr-10 p-5 right-0 bottom-2 w-[30%] rounded'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
				>
					<Image
						src='/image/cookies.PNG'
						width={100}
						height={100}
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
					<div className='text-center'>
						<button
							onClick={() => {
								setCookies(false);
							}}
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
