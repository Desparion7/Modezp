import SectionTitle from '@/components/section-header';
import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
	return (
		<section className='my-5  pb-20'>
			<div className='container mx-auto'>
				<div className=' w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Nasze realizacje</SectionTitle>
				</div>
			</div>
			<div className='flex flex-wrap justify-between'>
				<div className='relative flex flex-row w-[100%] bg-[#509f25]'>
					<div className='relative mr-auto w-[50%]'>
						<Image
							src='/portfolio2.PNG'
							alt='logo warsztatu'
							width={954}
							height={591}
							priority
							sizes='100vw'
						/>
					</div>
					<div className='flex flex-col mx-auto items-center gap-5 justify-center p-10 w-[50%] text-white'>
						<h2 className=' text-3xl'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus ipsam eligendi voluptatibus
							voluptate.
						</h2>
						<p className='text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Labore, numquam.
						</p>
					</div>
				</div>
				<div className='relative flex flex-row w-[100%] bg-black'>
					<div className='flex flex-col mx-auto items-center gap-5 justify-center p-10 w-[50%] text-white'>
						<h2 className=' text-3xl'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus ipsam eligendi voluptatibus
							voluptate.
						</h2>
						<p className='text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Labore, numquam.
						</p>
					</div>
					<div className='relative ml-auto  w-[50%]'>
						<Image
							src='/portfolio3.PNG'
							alt='logo warsztatu'
							width={954}
							height={591}
							priority
							sizes='100vw'
						/>
					</div>
				</div>
				<div className='relative flex flex-row w-[100%] bg-[#daa034]'>
					<div className='relative mr-auto w-[50%]'>
						<Image
							src='/portfolio1.PNG'
							alt='logo warsztatu'
							width={1636}
							height={863}
							priority
							sizes='100vw'
						/>
					</div>
					<div className='flex flex-col mx-auto items-center gap-5 justify-center p-10 w-[50%] text-black'>
						<h2 className=' text-3xl'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus ipsam eligendi voluptatibus
							voluptate.
						</h2>
						<p className='text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Labore, numquam.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
