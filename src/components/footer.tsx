/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';

const sectionOneData = [
	{
		title: 'Biuro',
		text: ['ul. Lipowa 88', '37-716 Orły'],
	},
];
const sectionTwoData = [
	{
		title: 'Przejdź do:',
		links: [
			{ text: 'Strona główna', link: '/' },
			{
				text: 'Jak zacząć?',
				link: '/jak-zaczac',
			},
			{
				text: 'Cennik',
				link: '/cennik',
			},
			{
				text: 'Kontakt',
				link: '/kontakt',
			},
			{
				text: 'Blog',
				link: '/blog',
			},
			{
				text: 'Formularz zgłoszeniowy',
				link: '/formularz-zgloszeniowy',
			},
		],
	},
];

const sectionThreeData = [
	{
		title: 'Kontakt',
		text: [
			'E-mail: elo.naukajazdy@gmail.com',
			'Telefon:',
			'+48 796 390 226',
		],
	},
];

const Footer = () => {
	return (
		<footer className='   py-5 lg:py-10 z-50 min-h-[250px]   bg-black text-main-bright-color'>
			<div className='w-3/4 flex justify-center items-center text-center lg:text-start flex-col xl:flex-row gap-4 lg:gap-1 container left-1/2 relative -translate-x-1/2'>
				<div className=' max-w-[20rem] items-center xl:items-start flex flex-col mb-5 xl:mb-0 '>
					<Link href='/'>
						<Image
							src='/logo.png'
							alt='logo'
							width={100}
							height={100}
							sizes='100vh'
							className='mb-2'
							loading='lazy'
						/>
					</Link>
					<p className='text-sm'>
						Ośrodek Szkolenia Kierowców w Rzeszowie – profesjonalne
						kursy prawa jazdy, nowoczesne metody nauki i wysoka
						zdawalność. Zaufaj ekspertom i zacznij jeździć pewnie
						już dziś!
					</p>
					<Link
						href='/polityka-prywatnosci'
						className='text-xs lg:text-md  hover:text-blue-400 duration-150
            mt-1'
					>
						Polityka prywatności
					</Link>
				</div>

				<div className=' flex gap-3 lg:gap-0 flex-col md:flex-row justify-around w-full'>
					<div className=' '>
						{sectionTwoData.map((section, index) => (
							<NavSection key={index} data={section} />
						))}
					</div>
					<div className=''>
						{sectionOneData.map((section, index) => (
							<Section key={index} data={section} />
						))}
					</div>

					<div className=''>
						{sectionThreeData.map((section, index) => (
							<Section key={index} data={section} />
						))}

						<a
							href='https://www.facebook.com/profile.php?id=61556577959946'
							className='flex gap-2 items-center justify-center text-xs lg:text-base w-full  text-center hover:text-blue-400 duration-150'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>Znajdziesz nas również na facebooku</p>
							<FaFacebookSquare className=' text-blue-500 text-[20px]' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

type SectionType = {
	data: { title: string; text: string[] };
};
type NavSectionType = {
	data: { title: string; links: { text: string; link: string }[] };
};

const Section = ({ data }: SectionType) => {
	return (
		<div className='flex-1'>
			<div className='text-base lg:text-lg mb-1 font-semibold'>
				<p>{data.title}</p>
			</div>
			<ul className=''>
				{data.text.map((item, i) => (
					<li key={i} className='text-xs lg:text-base'>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
const NavSection = ({ data }: NavSectionType) => {
	return (
		<div className='flex-1'>
			<div className='text-base lg:text-lg mb-1 font-semibold'>
				<p>{data.title}</p>
			</div>
			<ul className='flex flex-col lg:gap-[1px] gap-1 items-center lg:items-start '>
				{data.links.map((item, i) => (
					<li
						key={i}
						className='text-xs lg:text-base flex items-center justify-start hover:text-main-color duration-150 '
					>
						<div className='w-[5px] h-[5px] bg-white mr-2 rounded-full' />
						<Link href={item.link}> {item.text}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
