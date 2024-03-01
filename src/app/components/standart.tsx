'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';

const Standart = () => {
	return (
		<motion.div
			className={`mb-3 py-6 sm:mb-5 sm:py-12 grid grid-cols-12 ${styles.gradient}`}
			initial={{ x: -200, opacity: 0 }}
			transition={{ duration: 0.5 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
		>
			{/* h3 for mobile */}
			<h3 className='text-xl sm:hidden col-span-12 mb-3 text-center uppercase text-[#002247]'>
				WYGODNE ZARZĄDZANIA STRONĄ
			</h3>
			<div className='col-span-12 col-start-5 sm:col-span-2 sm:col-start-2 flex items-center'>
				<div className='relative w-[50%] sm:w-[100%] h-auto'>
					<Image
						src='/manage.PNG'
						width={500}
						height={500}
						sizes='100vw'
						alt='ikona trybu'
					/>
				</div>
			</div>
			<div className='col-span-10 col-start-2 sm:col-span-7 sm:col-start-5 sm:font-medium'>
				{/* h3 for desktop */}
				<h3 className='hidden sm:block text-xl sm:text-2xl lg:text-3xl mb-3 text-center uppercase text-third-color'>
					WYGODNE ZARZĄDZANIA STRONĄ
				</h3>
				<p className='tracking-widest text-sm text-center leading-8  sm:text-lg sm:mt-8'>
					Jeśli mówimy o stronach dla firm, blogach lub wizytówkach,
					popularnym wyborem jest platforma{' '}
					<Link
						href='/uslugi/strona-internetowa/word-press'
						className='text-main-color hover:text-second-color hover:border-b-2 border-main-color'
					>
						WordPress.
					</Link>{' '}
					Jeżeli Twoją branżą jest sprzedaż, to można również rozważyć
					dodanie{' '}
					<Link
						href='/blog/woocommerce'
						className='text-main-color hover:text-second-color hover:border-b-2 border-main-color'
					>
						WooCommerce.
					</Link>{' '}
					<Link
						href='/uslugi/strona-internetowa/word-press'
						className='text-main-color hover:text-second-color hover:border-b-2 border-main-color'
					>
						WordPress
					</Link>{' '}
					to panel do zarządzania treścią{' '}
					<Link
						href='/blog/cms'
						className='text-main-color hover:text-second-color hover:border-b-2 border-main-color'
					>
						(CMS)
					</Link>
					, który umożliwia swobodną edycję zawartości na każdej
					podstronie.
				</p>
			</div>
		</motion.div>
	);
};

export default Standart;
