import SectionTitle from '@/components/section-header';
import React from 'react';
import Standart from './standart';
import Standart2 from './standart2';
import Standart3 from './standart3';
import Standart4 from './standart4';

const Standards = () => {
	return (
		<section className='relative container mx-auto sm:px-5 my-5  pb-20'>
			<div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center sm:text-left'>
				<SectionTitle>Nasze standardy</SectionTitle>
			</div>
			<Standart />
			<Standart2 />
			<Standart3 />
			<Standart4 />
		</section>
	);
};

export default Standards;
