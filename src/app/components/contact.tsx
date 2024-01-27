'use client';
import Image from 'next/image';
import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Contact = () => {
	return (
		<section
			className={`relative flex justify-center mx-auto pt-10 pb-16 sm:pb-36 w-[100%] h-auto ${styles['contact-gradient']}`}
		>
			<Image
				src='/internet.PNG'
				alt='backgorund'
				sizes='100vw'
				fill
				priority
				className='sm:object-cover sm:object-center z-[-3] h-[100vh] sm:w-[100vw] '
			/>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='relative flex flex-col md:max-h-[100%] bg-sky-100 text-black p-6 sm:p-10 gap-4'>
					<div className='pb-[70px] '>
						<div
							style={{
								position: 'relative',
								width: '150px',
								height: '100px',
							}}
						>
							<Image
								src='/contactphoto.PNG'
								width={831}
								height={848}
								className='absolute top-[-70px] rounded-[50%] aspect-auto border-2 border-orange-600'
								alt='osoba do kontaktu'
							/>
						</div>
						<div className='flex flex-col gap-3 relative top-[30px]'>
							<h3 className='text-xl sm:text-3xl font-semibold'>
								Mateusz Woś
							</h3>
							<p>Specjalista ds. Obsługi Klienta</p>
							<p className=' sm:text-2xl font-semibold'>
								Przemyślmy i ustalmy strategię działania!
							</p>
							<div className='flex items-center text-xl sm:text-2xl font-semibold'>
								<IoIosPhonePortrait />
								<p>+48 796 390 226</p>
							</div>
							<p>Godziny pracy 8:00-18:00</p>
							<div className='flex items-center gap-2 text-md sm:text-xl font-semibold'>
								<MdOutlineMailOutline />
								<p className='text-[#e53c16]'>
									modezpw@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-[#002247] text-white p-6 sm:p-10 xl:min-h-[100%] text-sm sm:text-lg'>
					<form action='' className='flex flex-col gap-3 '>
						<h2 className='text-xl sm:text-2xl mb-3'>
							Formularz kontaktowy
						</h2>
						<div className='flex flex-col sm:flex-row  gap-2'>
							<p>Witam, mam na imię</p>{' '}
							<input
								type='text'
								name='name'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
								placeholder='Imię i nazwisko'
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>Szukam firmy, która pomoże mi</p>{' '}
							<select
								name='topic'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
							>
								<option value=''>Wybierz z listy</option>
								<option value=''>stworzyć stronę www</option>
								<option value=''>
									stworzyć sklep internetowy
								</option>
								<option value=''>stworzyć logo</option>
							</select>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>Chcę na to przeznaczyć </p>{' '}
							<input
								type='text'
								name='resources'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
								placeholder='3 000 zł'
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>Proszę o kontakt na numer</p>
							<input
								type='number'
								name='phone'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
								placeholder='+48 101 101 101'
							/>
						</div>
						<div className='flex items-center gap-2'>
							<p>między</p>{' '}
							<select
								name='from'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
							>
								<option value='1'>6:00</option>
								<option value='2'>8:00</option>
								<option value='3'>10:00</option>
								<option value='4'>12:00</option>
								<option value='5'>14:00</option>
								<option value='5'>16:00</option>
								<option value='5'>18:00</option>
							</select>
							<p>-</p>{' '}
							<select
								name='to'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
							>
								<option value='2'>8:00</option>
								<option value='3'>10:00</option>
								<option value='4'>12:00</option>
								<option value='5'>14:00</option>
								<option value='5'>16:00</option>
								<option value='5'>18:00</option>
								<option value='5'>20:00</option>
							</select>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>lub na adres mailowy</p>{' '}
							<input
								type='email'
								className='bg-slate-900 border-b-2 border-sky-900 p-1'
								placeholder='email'
							/>
						</div>
						<div className='flex mt-5'>
							<motion.button
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
								type='submit'
								className='bg-button-background outline-none text-white text-md lg:text-lg py-2 px-4 rounded-3xl hover:bg-orange-600 transition-all hover:scale-2'
							>
								Wyślij wiadomość
							</motion.button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
