import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import styles from '../../styles.module.css';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';

const Projects = () => {
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
				<div className='container xl:px-64 p-5 py-28 flex flex-col gap-6 z-2'>
					<div className='sm:mb-5 md:h-[20vh]'>
						<h2 className='uppercase text-center text-xl lg:text-2xl md:text-3xl mb-6'>
							Projektowanie{' '}
							<span className='text-main-color'>UI</span>{' '}
						</h2>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Projektowanie interfejsu użytkownika (UI) to proces,
							który wykracza poza samo kreowanie estetycznego
							wyglądu interfejsu. W naszym podejściu, jest to
							rozwinięcie i uzupełnienie projektowania doświadczeń
							użytkownika(UX). Skuteczne projektowanie UI wymaga
							nie tylko umiejętności graficznych. Istotne jest
							również przewidywanie reakcji użytkowników i
							uzasadnianie każdego podjętego wyboru projektowego.
						</p>
					</div>
					<div className='flex flex-col md:flex-row flex-wrap justify-center gap-5'>
						<LinkSmallCard
							title={'Strona w Next.js'}
							link={'/uslugi/strona-internetowa/next-js'}
						/>
						<LinkSmallCard
							title={'Strona w WordPress'}
							link={'/uslugi/strona-internetowa/word-press'}
						/>
						<LinkSmallCard
							title={'Sklep Internetowy'}
							link={'/uslugi/sklep'}
						/>
						<LinkSmallCard title={'Logo'} link={'/uslugi/logo'} />
						<LinkSmallCard
							title={'Page Builder'}
							link={'/uslugi/strona-internetowa/page-builder'}
						/>
						<LinkSmallCard
							active={true}
							title={'Projektowanie UI'}
							link={'/uslugi/strona-internetowa/projektowanie-ui'}
						/>
					</div>
				</div>
				<div
					className={`absolute flex justify-center items-end md:items-center z-4  w-[100%] h-[20%] bottom-0 ${styles['shadow-services']}`}
				>
					<ScrollDownBtn />
				</div>
			</section>
			<section
				className='relative container mx-auto pb-20 min-h-[65vh]'
				id='second-section'
			>
				<div className='w-[100%] md:w-[50%] flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Projektowanie</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Projektowanie
						</h3>
						<p className='pb-5 leading-8 text-justify'></p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default Projects;
