import React from 'react';
import Image from 'next/image';

type PortfolioCardType = {
	title: string;
	text: string;
	img: string;
	page: string;
};

const PortfolioCard = ({ title, text, img, page }: PortfolioCardType) => {
	return (
		<div className='p-5 rounded-lg bg-blue-100 dark:bg-sky-950 transition-all hover:bg-blue-200 shadow-lg text-center'>
			<h3 className='uppercase text-xl font-semibold mb-3'>{title}</h3>
			<Image
				src={img}
				width='0'
				height='0'
				sizes='100vw'
				className='w-full max-h-[400px] object-fill rounded-sm'
				alt='WickerLand'
			/>
			<p className='my-5 text-lg uppercase'>{text}</p>
			<div className='flex flex-col gap-3 my-5'>
				<button className='bg-gradient-to-t from-blue-500 via-blue-700 to-sky-500 text-white p-2 rounded-lg shadow-lg transition hover:scale-105'>
					Wykorzystane technologie
				</button>
				<a
					className='bg-gradient-to-t from-blue-500 via-blue-700 to-sky-500 text-white p-2 rounded-lg shadow-lg  transition hover:scale-105'
					href={page}
					target='_blank'
					rel='noopener noreferrer'
				>
					Strona
				</a>
			</div>
		</div>
	);
};

export default PortfolioCard;
