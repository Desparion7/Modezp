'use client';
import SectionTitle from '@/components/section-header';
import React from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { sendFormData, FormRegistration } from '@/lib/contact-form';
import { toast } from 'react-hot-toast';

const FormRegistration = () => {
	const { control, handleSubmit, reset } = useForm<FormRegistration>();

	const onSubmit: SubmitHandler<FormRegistration> = async (data) => {
		const url =
			'https://modezp.com/wp/wp-json/contact-form-7/v1/contact-forms/151/feedback';
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
		<>
			<div className='container mx-auto  flex flex-col justify-between text-center mt-10 sm:text-left'>
				<SectionTitle>Formularz Zgłoszeniowy</SectionTitle>
			</div>
			<section className='relative container mx-auto pb-32  '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col justify-around gap-1 text-sm sm:text-md  text-black'
				>
					<p className='text-lg'>
						Zapraszamy do uzupełnienia krótkiego formularza.
					</p>
					<p className='text-lg mb-5'>
						Formularz pozwoli nam zebrać niezbędne dane do
						rozpoczęcia pracy, a państwu umożliwi w wygodny sposób
						przekazanie informacji.
					</p>
					<h2 className='text-xl my-2 font-semibold'>
						1. Informacje kontaktowe:
					</h2>
					<Controller
						name='yourName'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='yourName'>
									Imię i nazwisko / Nazwa firmy:
								</label>
								<input
									id='yourName'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='yourEmail'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='yourEmail'>Adres e-mail:</label>
								<input
									id='yourEmail'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='yourPhone'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='yourPhone'>
									Numer telefonu:
								</label>
								<input
									id='yourPhone'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='yourAdress'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='yourAdress'>Adres firmy:</label>
								<input
									id='yourAdress'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						2. Opis działalności firmy:
					</h2>
					<Controller
						name='shortCompanyDescription'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='shortCompanyDescription'>
									Krótki opis działalności firmy:
								</label>
								<input
									id='shortCompanyDescription'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='companyProducts'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='companyProducts'>
									Główne produkty/usługi oferowane przez
									Państwa firmę:
								</label>
								<input
									id='companyProducts'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='companyCharacteristics'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='companyCharacteristics'>
									Czy firma ma jakieś specjalne cechy, które
									powinny być uwzględnione na stronie?
								</label>
								<input
									id='companyCharacteristics'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='companyLogo'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='companyLogo'>
									Czy posiadają Państwo logo firmy?
								</label>
								<input
									id='companyLogo'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						3. Wymagane funkcje:
					</h2>
					<Controller
						name='pageFunctions'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='pageFunctions'>
									Jakie funkcje proponowaliby Państwo, aby
									były dostępne na stronie? (np. formularz
									kontaktowy, galeria zdjęć itp.)
								</label>
								<input
									id='pageFunctions'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='pageSections'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='pageSections'>
									Czy są jakieś specjalne sekcje, które
									chciałbyś umieścić na swojej stronie?
								</label>
								<input
									id='pageSections'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						4. Wygląd i styl:
					</h2>
					<Controller
						name='pageStyle'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='pageStyle'>
									Czy posiadają Państwo jakieś preferencje
									dotyczące kolorów, stylu grafiki, układu
									strony?
								</label>
								<input
									id='pageStyle'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='pageExample'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='pageExample'>
									Czy posiadają Państwo jakieś przykłady stron
									internetowych, które Ci się podobają?
									(Proszę podać linki lub nazwy)
								</label>
								<input
									id='pageExample'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						5. Zawartość strony:
					</h2>
					<Controller
						name='pageMainInformation'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='pageMainInformation'>
									Jakie informacje powinny znaleźć się na
									stronie głównej?
								</label>
								<input
									id='pageMainInformation'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='pageExtraInfromation'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='pageExtraInfromation'>
									Czy posiadają Państwo już przygotowane
									treści (teksty, zdjęcia) do umieszczenia na
									stronie?
								</label>
								<input
									id='pageExtraInfromation'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						6. Struktura strony:
					</h2>
					<Controller
						name='subpages'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='subpages'>
									Ile podstron chciałbyś mieć na stronie? (np.
									strona główna, o nas, usługi, kontakt, itp.)
								</label>
								<input
									id='subpages'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='subpagesInfo'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='subpagesInfo'>
									Jakie podstrony chciałbyś, aby znalazły się
									na stronie?
								</label>
								<input
									id='subpagesInfo'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						7. Hosting i domena:
					</h2>
					<Controller
						name='domena'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='domena'>
									Czy masz już zakupioną domenę? (Jeśli tak,
									proszę podać nazwę)
								</label>
								<input
									id='domena'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='hosting'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='hosting'>
									Czy potrzebujesz pomocy w wyborze hostingu?
								</label>
								<input
									id='hosting'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						8. Terminy i budżet:
					</h2>
					<Controller
						name='deadline'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='deadline'>
									Jaki jest Twój planowany termin ukończenia
									strony?
								</label>
								<input
									id='deadline'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<Controller
						name='budget'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='budget'>
									Jaki jest Twój budżet na ten projekt?
								</label>
								<input
									id='budget'
									required
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<h2 className='text-xl my-2 font-semibold'>
						9. Inne uwagi:
					</h2>
					<Controller
						name='comments'
						control={control}
						defaultValue=''
						rules={{ required: true }}
						render={({ field }) => (
							<>
								<label htmlFor='comments'>
									Czy mają Państwo jakieś dodatkowe uwagi lub
									wymagania dotyczące projektu?
								</label>
								<input
									id='comments'
									{...field}
									type='text'
									className='p-2'
								/>
							</>
						)}
					/>
					<label htmlFor='agreement' className=' mt-2 flex'>
						<input
							type='checkbox'
							className='w-[20px] h-[20px] '
							required
						/>
						<p className='text-[12px] xl:text-sm ml-3'>
							Zgadzam się na przetwarzanie moich danych osobowych
							przez Modezp Mateusz Woś, NIP: 7952501374 w celu
							kontaktu z Tobą na Twoją prośbę zgodnie z polityką
							prywatności.
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
							Wyślij formularz
						</motion.button>
					</div>
				</form>
			</section>
		</>
	);
};

export default FormRegistration;
