import React from 'react';
import SectionHeader from './ui/section-header';
import PortfolioCard from './portfolio-card';
import { portfolio } from '@/lib/data';

const Portfolio = () => {
	return (
		<section className='container mx-auto my-20'>
			<SectionHeader>Portfolio</SectionHeader>
			<div className='pb-[200px] flex gap-5 flex-wrap justify-center'>
				{portfolio.map((page) => (
					<PortfolioCard
						key={page.title}
						title={page.title}
						text={page.text}
						img={page.img}
					/>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
