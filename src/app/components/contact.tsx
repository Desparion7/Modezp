import Image from 'next/image';
import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';

const Contact = () => {
	return (
		<section className='flex justify-center items-center mx-auto py-20 w-[100%] h-auto bg-gradient-to-r from-blue-950 to-sky-950'>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='relative flex flex-col mix-h-[100%] bg-sky-100 text-black p-10 gap-4'>
					<div className='pb-[70px] '>
						<Image
							src='/contactphoto.PNG'
							width={150}
							height={100}
							className='absolute top-[-70px] rounded-[50%]'
							alt='osoba do kontaktu'
						/>
						<div className='flex flex-col gap-3 relative top-[70px]'>
							<h3 className='text-3xl font-semibold'>
								Mateusz Woś
							</h3>
							<p>Specjalista ds. Obsługi Klienta</p>
							<p className='text-2xl font-semibold'>
								Przemyślmy i ustalmy strategię działania!
							</p>
							<div className='flex items-center text-xl font-semibold'>
								<IoIosPhonePortrait />
								<p>+48 796 390 226</p>
							</div>
							<p>Godziny pracy 8:00-18:00</p>
							<div className='flex items-center gap-2 text-xl font-semibold'>
								<MdOutlineMailOutline />
								<p className='text-[#e53c16]'>
									modezpw@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-black text-white p-10 h-[100%]'>
					<form action='' className='flex flex-col gap-3'>
						<h2 className='text-2xl mb-3'>Formularz kontaktowy</h2>
						<div className='flex items-center gap-2'>
							<p>Witam, mam na imię</p>{' '}
							<input
								type='text'
								className='bg-stone-900 border-b-2 border-sky-900 p-1'
								placeholder='Imię i nazwisko'
							/>
							<p>.</p>
						</div>
						<div className='flex items-center gap-2'>
							<p>Szukam firmy, która pomoże mi</p>{' '}
							<select className='bg-stone-900 border-b-2 border-sky-900 p-1'>
								<option value=''>Wybierz z listy</option>
								<option value=''>stworzyć stronę www</option>
								<option value=''>
									stworzyć sklep internetowy
								</option>
								<option value=''>stworzyć logo</option>
							</select>
							<p>.</p>
						</div>
						<div className='flex items-center gap-2'>
							<p>Chcę na to przeznaczyć </p>{' '}
							<input
								type='number'
								className='bg-stone-900 border-b-2 border-sky-900 p-1'
								placeholder='3 000 zł'
							/>
							<p>.</p>
						</div>
						<div className='flex items-center gap-2'>
							<p>Proszę o kontakt na numer</p>{' '}
							<input
								type='number'
								className='bg-stone-900 border-b-2 border-sky-900 p-1'
								placeholder='+48 111 111 111'
							/>
						</div>
						<div className='flex items-center gap-2'>
							<p>między</p>{' '}
							<input
								type='time'
								className='bg-stone-900 border-b-2 border-sky-900 p-1'
								step={3600}
								placeholder='6:00'
							/>
							<p>, a</p>{' '}
							<input
								type='time'
								className='bg-stone-900 border-b-2 border-sky-900 p-1'
								step={3600}
								placeholder='6:00'
							/>
						</div>
						<div className='flex items-center gap-2'>
							<p>lub na adres mailowy</p>{' '}
							<input
								type='email'
								className='bg-stone-900 border-b-2 border-sky-900 p-1'
								placeholder='email'
							/>
							<p>.</p>
						</div>
						<div className='flex mt-5'>
							<button
								type='submit'
								className='bg-button-background outline-none text-white text-md lg:text-lg py-2 px-4 rounded-xl'
							>
								Wyślij wiadomość
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
