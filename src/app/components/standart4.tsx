'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';

const Standart4 = () => {
  return (
    <motion.div
      className={`mb-3 sm:mb-5 py-12 grid grid-cols-12 ${styles.gradient3}`}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}>
      <div className='col-span-10 col-start-2 sm:col-span-6 sm:col-start-2 sm:font-medium lg:max-w-[600px]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl mb-3 text-center uppercase text-main-color font-semibold'>
          Kopie zapasowe i zabezpieczenia
        </h3>
        {/* image for mobile */}
        <div className='flex sm:hidden items-center justify-center'>
          <div className='relative w-[40%] sm:w-[100%] h-auto'>
            <Image
              src='/base.PNG'
              width={500}
              height={500}
              sizes='100vw'
              alt='ikona symbolizujaca baze danych'
            />
          </div>
        </div>
        <div className='relative'>
          <Image
            alt=''
            src='/blot.png'
            width={315}
            height={285}
            className='absolute z-[-20] left-[-30px] bottom-[-80px]  lg:left-[-100px] lg:bottom-[-100px] w-[200px]  lg:w-[300px] '
          />
          <p className='tracking-widest text-sm text-center lg:leading-8  sm:text-base lg:text-lg sm:mt-8 shadow-2xl px-[10px] py-[15px] z-[10] bg-white'>
            Przy oddawaniu strony będziemy korzystać z najnowszych i
            najstabilniejszych wersji oprogramowania. Dodatkowo, zainstalujemy{' '}
            <Link
              href='/blog/certyfikat-ssl'
              className='text-main-color hover:text-second-color hover:border-b-2 border-main-color'>
              certyfikat SSL
            </Link>
            , co zapewni wyższy poziom bezpieczeństwa.
          </p>
        </div>
      </div>
      {/* image for desktop */}
      <div className='hidden sm:flex col-span-2 col-start-9 items-center'>
        <div className='relative w-[100%] h-auto'>
          <Image
            src='/base.PNG'
            width={500}
            height={500}
            sizes='100vw'
            alt='ikona symbolizujaca baze danych'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Standart4;
