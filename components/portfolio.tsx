import React from 'react';
import SectionHeader from './ui/section-header';
import PortfolioCard from './portfolio-card';
import { portfolio } from '@/lib/data';

const Portfolio = () => {
	return (
		<section className='container mx-auto my-20'>
			<SectionHeader>Portfolio</SectionHeader>
			<div className='pb-[200px] flex gap-5 flex-wrap justify-center'>
				{portfolio.map((project) => (
					<PortfolioCard
						key={project.title}
						title={project.title}
						text={project.text}
						img={project.img}
						page={project.page}
					/>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
