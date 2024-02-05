'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { blog } from '@/lib/blog-data';
import SectionTitle from '@/components/section-header';

const page = () => {
	return (
		<>
			<div className='container mx-auto lg:px-5 flex flex-col justify-between text-center mt-10 sm:text-left'>
				<SectionTitle>Blog</SectionTitle>
			</div>
			<section className=' flex flex-wrap sm:justify-center lg:justify-between gap-5 px-5 sm:px-20 lg:px-40 mt-10 pb-32  '>
				{blog.map((article) => (
					<div
						className='flex flex-col sm:w-[350px] mb-24 '
						key={article.h2}
					>
						<Link
							href={article.link}
							className='sm:overflow-hidden'
						>
							<motion.div
								className='relative w-[100%] h-auto  flex'
								whileHover={{
									rotate: 10,
									transition: { duration: 0.2 },
								}}
							>
								<Image
									src={article.img}
									height={350}
									width={336}
									sizes='100vw'
									className='w-[100%]'
									alt={article.alt}
								/>
							</motion.div>
						</Link>
						<p className='my-5'>
							<span className='bg-main-color  p-1 uppercase'>
								{article.span}
							</span>
						</p>
						<Link href={article.link}>
							<h2 className='font-semibold text-xl  hover:underline'>
								{article.h2}
							</h2>
						</Link>
						<p className='mt-2 '>{article.shortText}</p>
					</div>
				))}
			</section>
		</>
	);
};

export default page;
