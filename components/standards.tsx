'use client';
import SectionHeader from '@/components/ui/section-header';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Path from './ui/svg-path';


const Standards = () => {
	const [show, setShow] = useState(false);

	return (
		<section className='container mx-auto my-20'>
			<div className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'>
				<SectionHeader>Nasze standardy</SectionHeader>
			</div>
			<div
				className='flex'
				onClick={() => {
					setShow((prev) => !prev);
				}}
			>
				<motion.svg
					width='40'
					height='40'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					animate={show ? 'open' : 'closed'}
				>
					<Path
						d='M6 9L12 15L18 9'
						variants={{
							closed: { d: 'M6 9L12 15L18 9' },
							open: { d: 'M6 15L12 9L18 15' },
						}}
					/>
				</motion.svg>
				<h3 className='text-2xl mb-3'>Panel zarządzania stroną</h3>
			</div>
			<div className='flex justify-center gap-3 items-center'>
				<Image
					src='/image/standards1.PNG'
					width={100}
					height={100}
					alt='icon'
				/>
				<p className='tracking-widest'>
					Jeśli mówimy o stronach korporacyjnych, blogach lub
					wizytówkach, popularnym wyborem jest platforma WordPress.
					Jeżeli Twoją branżą jest sprzedaż, to można również rozważyć
					dodanie WooCommerce. WordPress to panel do zarządzania
					treścią (CMS), który umożliwia swobodną edycję zawartości na
					każdej podstronie. Dzięki niemu jesteś w stanie samodzielnie
					aktualizować dane kontaktowe, dodawać nowe zdjęcia oraz
					produkty.
				</p>
			</div>
		</section>
	);
};

export default Standards;
