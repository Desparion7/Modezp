'use client';
import Image from 'next/image';
import { IoIosPhonePortrait } from 'react-icons/io';

const Consultation = () => {
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
			<div className='relative xl:top-[-9vh] lg:w-[80%] w-[90%] flex flex-col justify-center my-5 mb-20 xl:mb-0 p-5 mx-auto sm:p-10 bg-black opacity-90 text-white shadow-md shadow-main-color'>
				<div className='flex justify-around flex-col gap-10 lg:flex-row mb-20 mt-10'>
					<div className='flex flex-col justify-center items-center'>
						<div className='mb-2'>
							<Image
								src='/contactphoto2.jpg'
								width={250}
								height={250}
								className=' w-[150px] h-[150px] rounded-[50%] aspect-auto border-2 border-orange-600'
								alt='osoba do kontaktu'
							/>
						</div>
						<div className='flex flex-col gap-3 relative'>
							<h2 className='text-xl sm:text-3xl text-center font-semibold'>
								Mateusz Woś
							</h2>
							<div className='flex items-center text-xl justify-center font-semibold'>
								<IoIosPhonePortrait />
								<p>+48 796 390 226</p>
							</div>
							<p className='text-center sm:text-2xl p-2'>
								Freelancer, Web Developer
							</p>
						</div>
					</div>
					<div className='flex flex-col justify-center items-center '>
						<div className='mb-2'>
							<Image
								src='/contactphoto1.jpg'
								width={607}
								height={658}
								className=' w-[150px] h-[150px] rounded-[50%] aspect-auto border-2 border-orange-600'
								alt='osoba do kontaktu'
							/>
						</div>
						<div className='flex flex-col gap-3 relative'>
							<h2 className='text-xl sm:text-3xl text-center font-semibold'>
								Łukasz Woś
							</h2>
							<div className='flex items-center text-xl justify-center font-semibold'>
								<IoIosPhonePortrait />
								<p>+48 796 284 109</p>
							</div>
							<p className='text-center sm:text-2xl   p-2'>
								Freelancer, Web Developer
							</p>
						</div>
					</div>
				</div>
				<div className=' text-center mb-10'>
					<h1 className='text-main-color text-center text-2xl mb-5'>
						Cena strony internetowej już od 800zł
					</h1>
					<p className='text-xl'>
						Cena strony internetowej zależy od wielu czynników, w
						tym technologii i indywidualnego projektu, ale jesteśmy
						tutaj, aby pomóc Ci dobrać najbardziej odpowiednie
						rozwiązanie w zależności od Twojego budżetu.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Consultation;
