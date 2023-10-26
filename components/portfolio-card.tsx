import React from 'react';
import Image from 'next/image';

type PortfolioCardType = {
	title: string;
	text: string;
	img: string;
};

const PortfolioCard = ({ title, text, img }: PortfolioCardType) => {
	return (
		<div className='p-5 rounded-lg bg-blue-100 transition-all hover:bg-blue-200'>
			<h3 className='uppercase text-xl font-semibold mb-3'>{title}</h3>
			<Image
				src={img}
				width='0'
				height='0'
				sizes='100vw'
				className='w-full max-h-[400px] object-fill'
				alt='WickerLand'
			/>
			<p className='mt-3'>{text}</p>
			<div className='flex flex-col gap-3 my-5'>
				<button className='bg-gradient-to-t from-blue-500 via-blue-700 to-sky-500 text-white p-2 rounded-lg'>
					Wykorzystane technologie
				</button>
				<button className='bg-gradient-to-t from-blue-500 via-blue-700 to-sky-500 text-white p-2 rounded-lg'>
					Strona
				</button>
			</div>
		</div>
	);
};

export default PortfolioCard;
