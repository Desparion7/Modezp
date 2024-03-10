'use client';
import SectionTitle from '@/components/section-header';
import React from 'react';
import { motion } from 'framer-motion';
import {
  useForm,
  SubmitHandler,
  Controller,
  Control,
  FieldValues,
  Path,
  ControllerRenderProps,
} from 'react-hook-form';
import { sendFormData, FormRegistration } from '@/lib/contact-form';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';

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
      <div className='container mx-auto  flex flex-col justify-between text-center mt-10 sm:text-left  '>
        <SectionTitle>Formularz Wyceny</SectionTitle>
      </div>
      <section className='relative container mx-auto pb-32  p-3 '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-around gap-1 text-sm sm:text-md  text-black  left-1/2 -translate-x-1/2 relative lg:w-1/2'>
          <p className='text-lg font-semibold'>
            Zapraszamy do uzupełnienia krótkiego formularza i otrzymania
            darmowej wyceny.
          </p>
          <p className=' text-base lg:text-lg mb-5 italic'>
            Formularz pozwoli nam zebrać niezbędne dane do wycenienia projektu.
          </p>

          <FormTitle text='1. Informacje kontaktowe:' />
          <Controller
            name='yourName'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Imię i nazwisko / Nazwa firmy:'
              />
            )}
          />
          <Controller
            name='yourEmail'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input field={field} type='text' text='Adres e-mail:' />
            )}
          />
          <Controller
            name='yourPhone'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input field={field} type='text' text='Numer telefonu:' />
            )}
          />
          <Controller
            name='yourAdress'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input field={field} type='text' text='Adres firmy:' />
            )}
          />

          <FormTitle text='2. Opis działalności firmy:' />
          <Controller
            name='shortCompanyDescription'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Krótki opis działalności firmy:'
              />
            )}
          />
          <Controller
            name='companyProducts'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Główne produkty/usługi oferowane przez Państwa firmę:   '
              />
            )}
          />
          <Controller
            name='companyCharacteristics'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy firma ma jakieś specjalne cechy, które powinny być
			   uwzględnione na stronie?'
              />
            )}
          />
          <Controller
            name='companyLogo'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy posiadają Państwo logo firmy?'
              />
            )}
          />
          <FormTitle text='3. Wymagane funkcje:' />
          <Controller
            name='pageFunctions'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Jakie funkcje proponowaliby Państwo, aby były dostępne na
			  stronie? '
                placeholder='(np. formularz kontaktowy, galeria zdjęć itp.)'
              />
            )}
          />
          <Controller
            name='pageSections'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy są jakieś specjalne sekcje, które chcielibyście Państwo umieścić na swojej stronie?'
              />
            )}
          />

          <FormTitle text='4. Wygląd i styl:' />
          <Controller
            name='pageStyle'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy posiadają Państwo jakieś preferencje dotyczące kolorów, stylu grafiki, układu strony?'
              />
            )}
          />
          <Controller
            name='pageExample'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy posiadają Państwo jakieś przykłady stron internetowych,
			   które Ci się podobają? '
                placeholder='(Proszę podać linki lub nazwy)'
              />
            )}
          />
          <FormTitle text='5. Zawartość strony:' />

          <Controller
            name='pageMainInformation'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy posiadają Państwo jakieś przykłady stron internetowych,
			  które Ci się podobają? '
              />
            )}
          />
          <Controller
            name='pageExtraInfromation'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy posiadają Państwo już przygotowane treści (teksty,
				zdjęcia) do umieszczenia na stronie?'
              />
            )}
          />
          <FormTitle text='6. Struktura strony:' />

          <Controller
            name='subpages'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Ile podstron chcielibyście Państwo mieć na stronie? '
                placeholder='(np. strona główna, o	nas, usługi, kontakt, itp.)'
              />
            )}
          />
          <Controller
            name='subpagesInfo'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Jakie podstrony chcielibyście Państwo, aby znalazły się na stronie?
				'
              />
            )}
          />
          <FormTitle text='7. Hosting i domena:' />

          <Controller
            name='domena'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text=' Czy masz już zakupioną domenę?'
                placeholder='(Jeśli tak, proszę podać nazwę)'
              />
            )}
          />
          <Controller
            name='hosting'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy potrzebujesz pomocy w wyborze hostingu?
				 '
              />
            )}
          />
          <FormTitle text='8. Terminy i budżet:' />
          <Controller
            name='deadline'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Jaki jest Państwa planowany termin ukończenia strony?'
              />
            )}
          />
          <Controller
            name='budget'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='number'
                text='Jaki jest Państwa budżet na ten projekt?
			   '
              />
            )}
          />
          <FormTitle text='9. Inne uwagi:' />
          <Controller
            name='comments'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                field={field}
                type='text'
                text='Czy mają Państwo jakieś dodatkowe uwagi lub wymagania
			  dotyczące projektu?'
              />
            )}
          />
          <label htmlFor='agreement' className=' mt-2 flex'>
            <input type='checkbox' className='w-[20px] h-[20px] ' required />
            <p className='text-[12px] xl:text-sm ml-3'>
              Zgadzam się na przetwarzanie moich danych osobowych przez Modezp
              Mateusz Woś, NIP: 7952501374 w celu kontaktu z Tobą na Twoją
              prośbę zgodnie z polityką prywatności.
            </p>
          </label>
          <div className='flex justify-center sm:justify-end mt-5'>
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              type='submit'
              className='bg-button-background outline-none text-white text-md lg:text-lg py-2 px-4 rounded-3xl hover:bg-orange-600 transition-all hover:scale-2'>
              Wyślij formularz
            </motion.button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormRegistration;

type InputProps<T extends FieldValues, K extends Path<T>> = {
  field: ControllerRenderProps<T, K>;
  type: string;
  placeholder?: string;
  text: string;
  style?: string;
};

type FormTitleType = {
  text: string;
};

const FormTitle = ({ text }: FormTitleType) => {
  return <h2 className='text-xl my-2 font-semibold text-main-color'>{text}</h2>;
};
const Input = <T extends FieldValues, K extends Path<T>>({
  field,
  type,
  placeholder,
  text,
  style,
}: InputProps<T, K>) => {
  return (
    <>
      <label htmlFor='yourName' className='italic'>
        {text}
      </label>

      <input
        {...field}
        type={type}
        className={cn(
          'p-2 shadow-lg lw-full  rounded-sm my-2 border-2 border-gray-300 bg-gray-50 focus:outline-none  focus:border-input-focus',
          style
        )}
        placeholder={placeholder}
      />
    </>
  );
};
