'use client';
import Image from 'next/image';
import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { sendFormData, FormData } from '@/lib/contact-form';

const Contact = () => {
	const { control, handleSubmit, reset } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const url =
			'https://modezp.com/wp/wp-json/contact-form-7/v1/contact-forms/39/feedback';
		try {
			const result = await sendFormData(data, url);
			if (result) {
				toast.success('Wiadomość została wysłana');
			}
			reset();
		} catch (error) {
			toast.error('Coś poszło nie tak');
		}
	};

	return (
		<section
			className={`relative flex justify-center mx-auto sm:pt-10 pb-16 sm:pb-36 w-[100%] h-auto ${styles['contact-gradient']}`}
		>
			<div>
				<Image
					src='/internet.PNG'
					alt='backgorund'
					sizes='100vw'
					fill
					className='object-cover z-[-3] '
					loading="lazy"
				/>
			</div>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='relative flex flex-col md:max-h-[100%] bg-white text-black p-6 sm:p-10 gap-4'>
					<div className='pb-[70px] flex flex-col items-center '>
						<div
							style={{
								position: 'relative',
								width: '150px',
								height: '100px',
							}}
						>
							<Image
								src='/contactphoto2.jpg'
								width={250}
								height={250}
								className='absolute w-[150px] h-[150px] top-[-70px] rounded-[50%] aspect-auto border-2 border-orange-600'
								alt='osoba do kontaktu'
							/>
						</div>
						<div className='flex flex-col items-center gap-3 relative top-[30px]'>
							<h3 className='text-xl sm:text-3xl font-semibold'>
								Mateusz Woś
							</h3>
							<p className='sm:text-2xl font-semibold text-center'>
								Przemyślmy i ustalmy strategię działania!
							</p>
							<div className='flex items-center text-xl sm:text-2xl font-semibold'>
								<IoIosPhonePortrait />
								<a href='tel:+48796390226'>796 390 226</a>
							</div>
							<p>Godziny pracy 8:00-18:00</p>
							<div className='flex items-center gap-2 text-md sm:text-xl font-semibold'>
								<MdOutlineMailOutline />
								<p className='font-semibold'>
									modezpw@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-third-color text-white p-6 pb-20 sm:p-10 xl:min-h-[100%] text-sm sm:text-lg'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-3 '
					>
						<h2 className='text-xl sm:text-2xl mb-3'>
							Formularz kontaktowy
						</h2>
						<div className='flex flex-col sm:flex-row  gap-2'>
							<p>Witam, mam na imię</p>{' '}
							<Controller
								name='yourName'
								control={control}
								defaultValue=''
								rules={{ required: true }}
								render={({ field }) => (
									<input
										{...field}
										type='text'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none '
										placeholder='Imię i nazwisko'
									/>
								)}
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>Szukam firmy, która pomoże mi</p>{' '}
							<Controller
								name='yourTopic'
								control={control}
								defaultValue='Wybierz z listy'
								rules={{ required: true }}
								render={({ field }) => (
									<select
										{...field}
										aria-label='cel kontaktu'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none'
									>
										<option value=''>
											Wybierz z listy
										</option>
										<option value='stworzyć stronę www'>
											Stworzyć stronę www
										</option>
										<option value='przenieść stronę na next.js'>
											Przenieść stronę na next.js
										</option>
										<option value='stworzyć logo'>
											Stworzyć logo
										</option>
										<option value='inny'>Inny</option>
									</select>
								)}
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>Chcę na to przeznaczyć </p>{' '}
							<Controller
								name='yourAmount'
								control={control}
								defaultValue=''
								rules={{ required: true }}
								render={({ field }) => (
									<input
										{...field}
										type='text'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none'
										placeholder='3 000 zł'
									/>
								)}
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>Proszę o kontakt na numer</p>
							<Controller
								name='yourPhone'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<input
										{...field}
										type='number'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none'
										placeholder='+48 101 101 101'
									/>
								)}
							/>
						</div>
						<div className='flex items-center gap-2'>
							<p>między</p>{' '}
							<Controller
								name='yourFromTime'
								control={control}
								defaultValue='6:00'
								render={({ field }) => (
									<select
										{...field}
										aria-label='czas'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none'
									>
										<option value='6:00'>6:00</option>
										<option value='8:00'>8:00</option>
										<option value='10:00'>10:00</option>
										<option value='12:00'>12:00</option>
										<option value='14:00'>14:00</option>
										<option value='16:00'>16:00</option>
										<option value='18:00'>18:00</option>
									</select>
								)}
							/>
							<p>-</p>{' '}
							<Controller
								name='yourToTime'
								control={control}
								defaultValue='8:00'
								render={({ field }) => (
									<select
										{...field}
										aria-label='czas'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none'
									>
										<option value='8:00'>8:00</option>
										<option value='10:00'>10:00</option>
										<option value='12:00'>12:00</option>
										<option value='14:00'>14:00</option>
										<option value='16:00'>16:00</option>
										<option value='18:00'>18:00</option>
										<option value='20:00'>20:00</option>
									</select>
								)}
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<p>lub na adres mailowy</p>{' '}
							<Controller
								name='yourEmail'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<input
										{...field}
										type='email'
										className='bg-third-color border-b-2 border-sky-900 p-1 focus:border-main-color focus:border-2 focus:outline-none'
										placeholder='email'
									/>
								)}
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
