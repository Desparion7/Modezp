import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import styles from '../../styles.module.css';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import Link from 'next/link';
import ScrollDownBtn from '@/ui/scroll-down-btn';

const page = () => {
	return (
		<div>
			<section
				className={`relative flex lg:py-10 justify-center items-center w-[100%] min-h-[100vh] mb-10  text-white`}
			>
				<div className=''>
					<Image
						src='/background2.jpng'
						alt='backgorund'
						sizes='100vw'
						fill
						priority={true}
						className='object-cover z-[-3]'
					/>
				</div>
				<div className='container lg:px-64 p-5 py-28 flex flex-col gap-6 z-2'>
					<div className='sm:mb-5 sm:h-[20vh]'>
						<h2 className='uppercase text-center text-lg lg:text-2xl md:text-3xl mb-6'>
							strona w{' '}
							<span className='text-main-color'>wordPress</span>?{' '}
						</h2>
						<p className='text-md md:text-lg text-center sm:text-start'>
							Tworzymy stronę internetową z użyciem WordPress,
							jednego z najbardziej znanych systemów zarządzania
							treścią{' '}
							<Link href='./' className='text-main-color'>
								(CMS)
							</Link>
							.
						</p>
					</div>
					<div className='flex flex-row flex-wrap justify-center gap-5'>
						<LinkSmallCard
							title={'Strona w Next.js'}
							link={'/uslugi/strona-internetowa/next-js'}
						/>
						<LinkSmallCard
							active={true}
							title={'Strona w WordPress'}
							link={'/uslugi/strona-internetowa/word-press'}
						/>
						<LinkSmallCard
							title={'Wsparcie Techniczne'}
							link={
								'/uslugi/strona-internetowa/wsparcie-techniczne'
							}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
					</div>
				</div>
				<div
					className={`absolute flex justify-center items-center z-4  w-[100vw] h-[20%] bottom-0 ${styles['shadow-services']}`}
				>
					<ScrollDownBtn />
				</div>
			</section>
			<section
				className='relative container mx-auto  pb-20 min-h-[65vh]'
				id='second-section'
			>
				<div className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Strona w WordPress</SectionTitle>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default page;
