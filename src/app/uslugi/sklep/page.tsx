'use client';

import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';
import ServicesNav from '../components/services-nav';
import { motion } from 'framer-motion';
import { IoMdCheckmark } from 'react-icons/io';
import { WhyUsCard } from '../strona-internetowa/components/ending-section';
import MoreInfo from './components/more-info';

const Shop = () => {
  return (
    <div className='overflow-hidden'>
      <section
        className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10 text-white p-1 xl:p-0`}>
        <div>
          <Image
            src='/background.jpg'
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
        <ServicesNav>
          <div className='w-[100%] bg-main-color h-[1px]' />
          <div className='sm:mb-5 py-3'>
            <h1 className='text-left text-md lg:text-xl my-2'>
              Profesjonalne tworzenie{' '}
              <span className='text-main-color font-semibold'>
                sklepów internetowych
              </span>{' '}
              (e-commerce)
            </h1>
            <p className='text-sm lg:text-lg text-start sm:text-justify'>
              Oferujemy profesjonalne usługi tworzenia sklepów internetowych
              opartych na popularnym systemie zarządzania treścią,{' '}
              <Link href='/uslugi/strona-internetowa/word-press'>
                <span className='text-main-color hover:border-b-2 border-main-color'>
                  WordPress{' '}
                </span>
              </Link>
              , w połączeniu z potężnym narzędziem do e-commerce, jakim jest
              WooCommerce.
            </p>
          </div>
        </ServicesNav>

        <ScrollDownBtn />
      </section>
      <div className='w-full relative '>
        <div className='relative'>
          <Image
            alt=''
            src='/transition.png'
            width={1940}
            height={603}
            className='hidden lg:inline-block lg:absolute w-full h-full min-h-[300px]  lg:h-[450px] top-[-160px]'
            loading='lazy'
          />
          <Image
            alt=''
            src='/mobile-transition.png'
            width={1940}
            height={403}
            className='absolute w-full h-[250px] top-[-100px] lg:hidden '
            loading='lazy'
          />
        </div>
      </div>
      <section className='  relative mb-[100px]' id='second-section'>
        <div className='container  mx-auto  relative  '>
          <Image
            alt=''
            src='/decoration.png'
            width={214}
            height={259}
            className='absolute w-[40px] lg:w-[100px] top-[50px] lg:top-[100px] rotate-180 opacity-80'
            loading='lazy'
          />
          <Image
            alt=''
            src='/decoration.png'
            width={214}
            height={259}
            className='absolute w-[60px] lg:w-[200px] top-[-60px] lg:top-[-20px] right-0 opacity-60 z-40 '
            loading='lazy'
          />
          <div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
            <SectionTitle style='text-main-bright-color border-b-transparent mb-0'>
              SKLEP INTERNETOWY (E-COMMERCE)
            </SectionTitle>
          </div>
        </div>
        <motion.div
          className='container left-1/2 relative -translate-x-1/2 mt-[100px] lg:mt-[200px]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <div className='  relative grid grid-cols-1 lg:grid-cols-2 px-2 gap-5 lg:gap-0 '>
            <div className=' relative  lg:max-w-[500px] flex flex-col gap-1 lg:gap-4 text-center lg:text-start'>
              <h4 className='text-main-color font-bold text-lg lg:text-3xl mb-2'>
                SKLEPY INTERNETOWE
              </h4>
              <p className='text-base lg:text-xl '>
                Nasze nowatorskie podejście, łączące innowacyjność z
                praktycznością, gwarantuje, że sklep internetowy, który dla
                Państwa stworzymy, będzie doskonale przyjęty przez potencjalnych
                klientów.
              </p>
              <ul className='flex flex-col gap-2  text-base lg:text-2xl items-start px-5 lg:px-0'>
                <li className='flex items-center justify-start'>
                  <IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
                  <span className='ml-2'>Stałe wsparcie</span>
                </li>
                <li className='flex items-center justify-start'>
                  <IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
                  <span className='ml-2'>Responsywne</span>
                </li>
                <li className='flex items-center justify-start'>
                  <IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
                  <span className='ml-2'>Przejrzysty panel użytkownika</span>
                </li>
                <li className='flex items-center justify-start'>
                  <IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
                  <span className='ml-2'>Funkcjonalne i intuicyjne</span>
                </li>
                <li className='flex items-center justify-start'>
                  <IoMdCheckmark className='text-main-color text-[20px] lg:text-[30px]' />
                  <span className='ml-2'>Zgodnie z Twoim projektem</span>
                </li>
              </ul>
            </div>
            <div className=''>
              <div className=''>
                <Image
                  alt=''
                  src='/ecommerce.png'
                  width={571.67}
                  height={476.77}
                  className=' w-[300px] lg:w-[800px] left-1/2 lg:left-[40%] relative -translate-x-1/2'
                />
              </div>
            </div>
          </div>

          <div className='  py-10 text-center lg:text-start px-1'>
            <p className='text-main-color font-bold text-lg lg:text-3xl mb-2 '>
              Zacznij sprzedawać online - a my Ci w tym pomożemy{' '}
            </p>
            <p className='text-base lg:text-xl max-w-[700px]  lg:px-0'>
              Całość formalności możemy dopełnić drogą telefoniczną lub
              e-mailową. Dzięki temu oszczędzisz swój czas oraz pieniądze.
              Zachęcamy do skontaktowania się z nami.
            </p>
            <Link href='/formularz-zgloszeniowy'>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                }}
                className='relative bg-button-background text-white  py-2.5 px-6 rounded-3xl  hover:bg-button-background-hover transition-all uppercase mt-5'>
                Formularz zgłoszeniowy{' '}
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <div className=' mt-[50px] lg:mt-[100px]'>
          <div className='absolute w-full '>
            <Image
              alt=''
              src='/transition-second.png'
              width={1940}
              height={603}
              className='hidden md:inline-block md:absolute w-full h-full min-h-[400px] top-[-100px] '
              loading='lazy'
            />
            <Image
              alt=''
              src='/mobile-transition-second.png'
              width={320}
              height={403}
              className='absolute w-full top-[0px] md:hidden h-full min-h-[500px]'
              loading='lazy'
            />
            <Image
              alt=''
              src='/decoration.png'
              width={214}
              height={259}
              className='absolute w-[80px] top-[400px] lg:top-[100px] rotate-45 opacity-60 left-[50px] lg:left-[10px]'
              loading='lazy'
            />
            <Image
              alt=''
              src='/decoration.png'
              width={214}
              height={259}
              className='absolute w-[100px] lg:w-[150px] lg:top-[-100px]  top-[-50px] right-0 opacity-50 rotate-90'
              loading='lazy'
            />
          </div>

          <div className='container mx-auto py-10 lg:py-20 mb-10 relative '>
            <SectionTitle style='text-main-bright-color border-b-transparent text-center md:text-start mb-10'>
              Co wyróżni Twoj sklep?{' '}
            </SectionTitle>

            <motion.div
              className=' w-full h-full relative  flex items-center justify-center gap-2 lg:gap-20 flex-col md:flex-row'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              <WhyUsCard text='Przejrzystość' />
              <WhyUsCard text='Funkcjonalność' />
              <WhyUsCard text='Nowoczesność' />
            </motion.div>
          </div>
        </div>
        <MoreInfo />
      </section>
      <Contact />
    </div>
  );
};

export default Shop;
