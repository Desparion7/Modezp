import SectionHeader from '@/components/section-header';
import React from 'react';
import Standart from './standart';
import { standarts } from '@/lib/data';

const Standards = () => {
	return (
		<section className='container mx-auto my-10 md:my-20 pb-20'>
			<div className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'>
				<SectionHeader>Nasze standardy</SectionHeader>
			</div>
			{standarts.map((standart, index) => (
				<Standart
					key={index}
					name={standart.name}
					imageSrc={standart.imageSrc}
					text={standart.text}
				/>
			))}
		</section>
	);
};

export default Standards;
