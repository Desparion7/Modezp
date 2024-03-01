'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { sendFormData, FormData } from '@/lib/contact-form';

const Contact = () => {
	const { control, handleSubmit, reset } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const url =
			'https://modezp.com/wp/wp-json/contact-form-7/v1/contact-forms/27/feedback';
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
		<section className='bg-black relative flex flex-col justify-around  items-center w-[100%] min-h-[91vh] bg-opacity-40'>
			<div>
				<Image
					src='/background.JPG'
					alt='backgorund'
					sizes='100vw'
					fill
					priority
					className='hidden sm:inline object-cover z-[-3] '
				/>
				<Image
					src='/background-mobile.jpg'
					alt='backgorund-mobile'
					sizes='100vw'
					fill
					priority
					className='sm:hidden object-cover z-[-3] '
				/>
			</div>
			<div className='relative mx-auto top-[-2vh] flex flex-col 2xl:flex-row gap-10 my-5 p-5 sm:p-10 bg-black opacity-90 text-white w-[90%] lg:w-[80%] shadow-md shadow-main-color'>
				<div className='flex flex-col  2xl:w-[50%]'>
					<div>
						<h2 className='text-xl sm:text-2xl text-center mb-5'>
							Masz pytania i wątpliwości? Nie wahaj się pytać.
							Pomożemy!
						</h2>
					</div>
					<div className='flex flex-col sm:justify-center items-center gap-4 '>
						<div
							style={{
								position: 'relative',
								width: '150px',
							}}
						>
							<Image
								src='/contactphoto2.jpg'
								width={250}
								height={250}
								className=' w-[150px] h-[150px] rounded-[50%] aspect-auto border-2 border-orange-600'
								alt='osoba do kontaktu'
							/>
						</div>
						<div className='flex flex-col gap-3 relative text-center'>
							<h2 className='text-xl font-semibold'>
								Mateusz Woś
							</h2>
							<div className='flex items-center text-xl '>
								<IoIosPhonePortrait />
								<a href='tel:+48796390226'>796 390 226</a>
							</div>
							<p>Godziny pracy 8:00-18:00</p>
							<div className='flex items-center gap-2 '>
								<MdOutlineMailOutline />
								<p className='font-semibold'>
									modezpw@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col justify-around gap-1 text-sm sm:text-md 2xl:w-[50%] text-black'
				>
					<h2 className='text-white text-xl mb-3'>
						Napisz wiadomość
					</h2>
					<Controller
						name='yourName'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<input
								{...field}
								type='text'
								className='p-2'
								placeholder='Imię i nazwisko'
							/>
						)}
					/>
					<Controller
						name='yourEmail'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input
								{...field}
								type='email'
								required
								className='p-2'
								placeholder='Twój e-mail'
							/>
						)}
					/>
					<Controller
						name='yourPhone'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input
								{...field}
								type='number'
								required
								className='p-2'
								placeholder='Twój numer telefonu'
							/>
						)}
					/>
					<Controller
						name='yourMessage'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<textarea
								{...field}
								className='p-2'
								placeholder='Wiadomość'
								cols={30}
								rows={5}
								style={{ resize: 'none' }}
							/>
						)}
					/>
					<label htmlFor='agreement' className='text-white mt-2'>
						<input
							type='checkbox'
							className='w-[20px] h-[20px]'
							required
						/>
						<p className='text-[12px] xl:text-sm'>
							Zgadzam się na przetwarzanie moich danych osobowych
							przez Modezp Mateusz Woś, NIP: 7952501374 w
							celu kontaktu z Tobą na Twoją prośbę zgodnie z
							polityką prywatności.
						</p>
					</label>
					<div className='flex justify-center sm:justify-end mt-5'>
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
			<div className=' flex flex-col sm:flex-row gap-3 justify-around mb-20 p-5 text-white  bg-black  w-[90%] lg:w-[80%] shadow-md shadow-main-color'>
				<div>
					<p>Modezp Mateusz Woś</p>
					<p>ul. Lipowa 88</p>
					<p>37-716 Orły</p>
				</div>
				<div>
					<p>NIP: 7952501374</p>
					<p>REGON: 365493155</p>
					<p>Konto: 12 1950 0001 2006 0001 3605 0001</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
