'use client';
import { FaCar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GiSteeringWheel } from 'react-icons/gi';
import { IoCarSportSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
	return (
		<section
			className={`relative container mx-auto flex justify-center items-center w-[100%] xl:h-[65vh] py-10 sm:px-5 text-black min-h-[300px]`}
			id='second-section'
		>
			<div className=' flex flex-col xl:flex-row gap-5 xl:gap-10 xl:h-[100%]'>
				<div className='flex flex-col gap-3 xl:w-[30%] xl:py-20 py-5 p-3'>
					<h2 className='uppercase text-xl md:text-3xl'>
						Nauka Jazdy{' '}
						<span className='text-main-color font-semibold'>
							Elo
						</span>{' '}
					</h2>
					<p className='text-md md:text-lg text-justify'>
						Oferuje profesjonalne kursy prawa jazdy, które
						przygotują Cię nie tylko do egzaminu, ale też do
						bezpiecznej i pewnej jazdy na drodze. Doświadczeni
						instruktorzy, elastyczny grafik oraz nowoczesne metody
						nauczania gwarantują szybkie i skuteczne zdobycie
						uprawnień oraz pewność za kierownicą.
					</p>
				</div>
				<div className='flex flex-col xl:flex-row xl:w-[70%] gap-5 text-white'>
					<div className='xl:w-[33%]'>
						<Link href='/cennik'>
							<motion.div
								className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color  p-4'
								transition={{ ease: 'easeOut', duration: 0.5 }}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
							>
								<div>
									<FaCar className='text-main-color text-3xl mb-2' />
									<h3 className='text-xl uppercase text-center sm:text-left'>
										<span className='text-main-color hover:border-b-2 border-main-color'>
											Kurs kategorii B
										</span>{' '}
									</h3>
									<p className='text-justify sm:text-left sm:text-md'>
										Kompleksowy kurs przygotowujący do
										zdobycia prawa jazdy kategorii B — od
										teorii po praktyczne jazdy. Program
										dopasowany do Twoich potrzeb, prowadzony
										przez doświadczonych instruktorów,
										zapewniający pewność i bezpieczeństwo na
										drodze.
									</p>
									<p className='text-main-color text-center text-2xl mt-10 pb-5'>
										Cenna już od 2990 zł
									</p>
									<div className='flex justify-end gap-2 xl:absolute bottom-8 right-8'>
										<p
											className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
										>
											Więcej
										</p>
										<FaArrowRightLong className='text-main-color text-2xl' />
									</div>
								</div>
							</motion.div>
						</Link>
					</div>
					<div className='w-[100%] xl:w-[33%]'>
						<motion.div
							className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color p-4'
							transition={{ ease: 'easeOut', duration: 0.5 }}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<Link href='/cennik'>
								<IoCarSportSharp className='text-main-color text-3xl mb-2' />
								<h3 className='text-xl uppercase text-center sm:text-left'>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										Kurs kategorii B - przyśpieszony
									</span>{' '}
								</h3>

								<p className='text-justify sm:text-left sm:text-md mt-2'>
									Kurs przyspieszony trwa około 4 tygodni,
									jednak czas jego realizacji może ulec
									zmianie w zależności od ewentualnych
									modyfikacji organizacyjnych zgłoszonych
									przez kursanta.
								</p>
								<p className='text-main-color text-center text-2xl mt-10 pb-5'>
									Cenna już od 3200 zł
								</p>
								<div className='flex justify-end gap-2 xl:absolute bottom-8 right-8'>
									<p
										className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
									>
										Więcej
									</p>
									<FaArrowRightLong className='text-main-color text-2xl' />
								</div>
							</Link>
						</motion.div>
					</div>
					<div className='w-[100%] xl:w-[33%]'>
						<Link href='/cennik'>
							<motion.div
								className='relative flex flex-col w-[100%] h-[100%] gap-3 bg-third-color p-4'
								transition={{ ease: 'easeOut', duration: 0.5 }}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
							>
								<GiSteeringWheel className='text-main-color text-3xl mb-2' />

								<h3 className='text-xl uppercase text-center sm:text-left '>
									<span className='text-main-color hover:border-b-2 border-main-color'>
										Jazdy doszkalające dla kursantów kat. B
									</span>{' '}
								</h3>

								<p className='text-justify sm:text-left sm:text-md'>
									Indywidualne zajęcia praktyczne, które
									pomogą Ci poprawić umiejętności i pewność za
									kierownicą. Idealne dla osób
									przygotowujących się do egzaminu lub
									chcących podnieść swoje kwalifikacje po
									zdobyciu prawa jazdy.
								</p>
								<p className='text-main-color text-center text-2xl mt-10 pb-5'>
									Cenna już od 100 zł/h
								</p>
								<div className='flex justify-end gap-2 xl:absolute bottom-8 right-8'>
									<p
										className={`text-main-color after:content-[''] after:bg-main-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] `}
									>
										Więcej
									</p>
									<FaArrowRightLong className='text-main-color text-2xl' />
								</div>
							</motion.div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
