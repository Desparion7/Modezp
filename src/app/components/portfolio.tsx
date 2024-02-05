'use client';
import SectionTitle from '@/components/section-header';
import React from 'react';
import PortfolioProject from './portfolio-project';

const Portfolio = () => {
	return (
		<section className='my-5 container mx-auto pb-10 '>
			<div className='container sm:mx-auto sm:px-5'>
				<div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Nasze realizacje</SectionTitle>
				</div>
			</div>
			<div className='flex flex-wrap justify-between px-5 '>
				<PortfolioProject
					side={'right'}
					backgroundColor={'bg-transparent'}
					textColor={'text-black'}
					src='/portfolio2.jpg'
					alt='logo warsztatu'
					width={954}
					height={591}
					title={
						'Przyjazne wizualnie środowisko, które wywołuje pozytywne emocje i zachęca przyszłych kursantów do podjęcia decyzji o nauce jazdy właśnie w NeoCar.'
					}
					text={
						'Struktura strony zaprojektowana do łatwego odnaleźienia niezbednych informacji.'
					}
				/>
				<PortfolioProject
					side={'left'}
					backgroundColor={'bg-transparent'}
					textColor={'text-black'}
					src='/portfolio3.jpg'
					alt='logo warsztatu'
					width={954}
					height={591}
					title={`Wizualnie zachwycająca przestrzeń, inspirująca emocje i pasję, zachęcająca do odkrywania świata fotografii z Adrianem.`}
					text={`Strona stworzona z myślą o łatwym dostępie do kluczowych informacji i galerii. Wyjątkowe kompozycje i estetyka prezentacji prac podkreślają artystyczny charakter i profesjonalizm.`}
				/>
				<PortfolioProject
					side={'right'}
					backgroundColor={'bg-transparent'}
					textColor={'text-black'}
					src='/portfolio1.jpg'
					alt='logo warsztatu'
					width={1636}
					height={863}
					title={`"Natychmiastowa pomoc drogowa, na którą możesz liczyć"-TRANSWOŚ.`}
					text={`Nasza strona oferuje łatwy dostęp do wyraźnie widocznego numeru telefonu, zapewniając szybki kontakt w sytuacjach awaryjnych. To właśnie tego typu strony powinny cechować się prostotą. `}
				/>
			</div>
		</section>
	);
};

export default Portfolio;
