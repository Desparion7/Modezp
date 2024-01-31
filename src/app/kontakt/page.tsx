'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';

const Contact = () => {
	return (
		<section className='bg-black relative flex justify-around  items-center w-[100%] min-h-[100vh] bg-opacity-40'>
			<div>
				<Image
					src='/background.jpg'
					alt='backgorund'
					sizes='100vw'
					fill
					priority
					className='object-cover z-[-3] '
				/>
			</div>
			<div className='flex p-10 bg-black opacity-90 text-white w-[80%]'>
				<div className='flex flex-col justify-between w-[50%]'>
					<div>
						<h2 className='text-2xl mb-4'>
							Masz pytania i wątpliwości? Nie wahaj się pytać.
							Pomożemy!
						</h2>
						<p className='text-xl'>
							Opisz nam po krótce Twoje cele, założenia i obawy.
							Skontaktujemy się z Tobą i postaramy wszystko
							wyjaśnić w prostej, zrozumiałej formie.
						</p>
					</div>
					<div className='flex items-center gap-4 p-2'>
						<div
							style={{
								position: 'relative',
								width: '100px',
								height: '100px',
							}}
						>
							<Image
								src='/contactphoto.PNG'
								width={831}
								height={848}
								className='absolute rounded-[50%] aspect-auto border-2 border-orange-600'
								alt='osoba do kontaktu'
							/>
						</div>
						<div className='flex flex-col gap-3 relative'>
							<h3 className='text-xl font-semibold'>
								Mateusz Woś
							</h3>
							<div className='flex items-center text-xl '>
								<IoIosPhonePortrait />
								<p>+48 796 390 226</p>
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
				<form className='flex flex-col justify-around gap-1 w-[50%] text-black'>
					<input
						className='p-2'
						type='text'
						name='name'
						placeholder='Imię i nazwisko'
					/>
					<input
						className='p-2'
						type='email'
						name='email'
						placeholder='Twój e-mail'
					/>
					<input
						className='p-2'
						type='email'
						name='email'
						placeholder='Twój numer telefonu'
					/>
					<textarea
						className='p-2'
						name='message'
						id='message'
						placeholder='Wiadomość'
						cols={30}
						rows={5}
					/>
					<label htmlFor='agreement' className='text-white mt-2'>
						<input
							type='checkbox'
							className='w-[20px] h-[20px]'
							required
						/>
						<p>
							Zgadzam się na przetwarzanie moich danych osobowych
							przez Modezp Mateusz Woś, NIP: 7952501374 w celu w
							celu kontaktu z Tobą na Twoją prośbę zgodnie z
							polityką prywatności.
						</p>
					</label>

					<div className='flex justify-end mt-5'>
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
			{/* <ScrollDownBtn /> */}
		</section>
	);
};

export default Contact;
