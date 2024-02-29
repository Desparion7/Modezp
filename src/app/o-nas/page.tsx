'use client';
import Image from 'next/image';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import SectionTitle from '@/components/section-header';
import { IoIosPhonePortrait } from 'react-icons/io';

const Aboutus = () => {
	return (
		<>
			<section
				className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10  text-white`}
			>
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
				<div className='relative flex flex-col  top-[-7vh] container xl:px-32 p-2 sm:p-5 pb-10 pt-20 sm:py-28 gap-6 z-2'>
					<div className='flex flex-col lg:flex-row justify-around gap-10 sm:mb-5 p-5 sm:p-10 md:min-h-[24vh] bg-black bg-opacity-80 shadow-md shadow-main-color'>
						<div className='lg:w-[50%]'>
							<h1 className='text-xl sm:text-3xl mb-5'>
								{`"Dwa umysły, jedna wizja - strony internetowe,
								które wyróżniają."`}
							</h1>
							<p className='text-md sm:text-xl text-justify'>
								Witamy w MODEZP, gdzie pasja do nowoczesnego
								designu i zaawansowanej technologii łączy się,
								tworząc unikatowe strony internetowe, które
								wyróżniają się w cyfrowym świecie. Założona
								przez braci, Mateusza i Łukasza, nasza firma to
								więcej niż tylko usługi web developmentu, to
								nasza wspólna misja.
							</p>
						</div>
						<div className='flex items-center lg:w-[30%]'>
							<Image
								src='/onas.jpg'
								alt='zdjęcie mózgu nad ksiązkami w bibliotece'
								sizes='50vw'
								width={500}
								height={500}
								priority={true}
							/>
						</div>
					</div>
				</div>
				<ScrollDownBtn />
			</section>
			<section
				className='relative container mx-auto pb-20 min-h-[65vh]'
				id='second-section'
			>
				<div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>Nasza Historia</SectionTitle>
				</div>
				<div className='flex flex-col lg:flex-row items-center gap-10 sm:mb-5 p-5 lg:p-10 md:min-h-[24vh] '>
					<div >
						<Image
							src='/onas2.jpg'
							alt='backgorund'
							sizes='50vw'
							width={900}
							height={668}
							priority={true}
						/>
					</div>
					<div className='w-[100%]'>
						<h2 className='text-xl sm:text-3xl mb-5'>
							Innowacja Pasja Perfekcja.
						</h2>
						<p className='text-md sm:text-xl text-justify mb-3'>
							Nasza przygoda zaczęła się od gier i aplikacji. Z
							czasem, nasze zainteresowania ewoluowały w kierunku
							web developmentu, a fascynacja technologią Next.js
							stała się podstawą naszej działalności. Dzięki
							naucę, eksperymentowaniu i profesjonalnej pracy,
							Modezp przekształcił się z pomysłu dwóch braci na
							rzeczywistość, w której każdy projekt jest
							świadectwem naszej pasji do perfekcji.
						</p>
						<p className='text-md sm:text-xl text-justify'>
							Wybraliśmy Next.js jako nasze główne narzędzie z
							kilku powodów: niezrównane SEO, szybkość ładowania
							stron, oraz wsparcie dla statycznych i serwerowo
							renderowanych stron. Dzięki temu możemy oferować
							naszym klientom strony, które nie tylko świetnie
							wyglądają, ale także doskonale działają w każdych
							warunkach.
						</p>
					</div>
				</div>
				<div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center mt-10 sm:text-left'>
					<SectionTitle>Nasz Zespół</SectionTitle>
					<div className='flex justify-around flex-col gap-10 lg:flex-row mb-20 mt-10'>
						<div className='flex flex-col justify-center items-center '>
							<div>
								<Image
									src='/contactphoto1.jpg'
									width={250}
									height={247}
									className=' w-[150px] h-[150px] rounded-[50%] aspect-auto border-2 border-orange-600'
									alt='osoba do kontaktu'
								/>
							</div>
							<div className='flex flex-col gap-3 relative'>
								<h3 className='text-xl sm:text-3xl text-center font-semibold'>
									Łukasz Woś
								</h3>
								<div className='flex items-center text-xl justify-center font-semibold'>
									<IoIosPhonePortrait />
									<p>+48 796 284 109</p>
								</div>
								<p className=' sm:text-2xl font-semibold bg-main-color p-2'>
									Współwłaściciel, Web Developer
								</p>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center'>
							<div>
								<Image
									src='/contactphoto2.jpg'
									width={250}
									height={250}
									className=' w-[150px] h-[150px] rounded-[50%] aspect-auto border-2 border-orange-600'
									alt='osoba do kontaktu'
								/>
							</div>
							<div className='flex flex-col gap-3 relative'>
								<h3 className='text-xl sm:text-3xl text-center font-semibold'>
									Mateusz Woś
								</h3>
								<div className='flex items-center text-xl justify-center font-semibold'>
									<IoIosPhonePortrait />
									<p>+48 796 390 226</p>
								</div>
								<p className=' sm:text-2xl font-semibold bg-main-color p-2'>
									Współwłaściciel, Web Developer
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Aboutus;
