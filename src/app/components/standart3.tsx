'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';

const Standart3 = () => {
  return (
    <motion.div
      className={`mb-3 py-6 sm:mb-5 sm:py-12 grid grid-cols-12 ${styles.gradient}`}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}>
      {/* h3 for mobile */}
      <h3 className='text-xl sm:hidden col-span-12 mb-3 text-center uppercase text-main-color font-semibold '>
        Optymalizacja
      </h3>
      <div className='col-span-12 col-start-5 sm:col-span-2 sm:col-start-2 flex items-center  '>
        <div className='relative w-[50%] sm:w-[100%] h-auto'>
          <Image
            src='/optimization.PNG'
            width={500}
            height={500}
            sizes='100vw'
            alt='ikona zegara optymalizacji'
          />
        </div>
      </div>
      <div className='col-span-10 col-start-2 sm:col-span-7 sm:col-start-5 sm:font-medium '>
        {/* h3 for desktop */}
        <h3 className='hidden sm:block text-xl sm:text-2xl lg:text-3xl mb-3 text-center uppercase text-main-color font-semibold'>
          Optymalizacja
        </h3>
        <div className='relative lg:max-w-[600px] left-1/2 -translate-x-1/2'>
          <Image
            alt=''
            src='/blot.png'
            width={315}
            height={285}
            className='absolute z-[-20] w-[200px]  lg:w-[300px] lg:right-[-100px] right-[-50px] top-[80px] lg:top-[150px] lg:rotate-180'
          />
          <p className='tracking-widest text-sm text-center lg:leading-8  sm:text-base lg:text-lg sm:mt-8 shadow-2xl px-[10px] py-[15px] z-[10] bg-white '>
            60% użytkowników rezygnuje z korzystania z Twojej strony, jeśli jej
            wczytywanie zajmuje więcej niż 5 sekund. Dlatego dokładnie
            analizujemy i optymalizujemy wszystkie aspekty, w tym usuwamy zbędne
            skrypty oraz dostosowujemy{' '}
            <Link
              href='/blog/fotografia'
              className='text-main-color hover:text-second-color hover:border-b-2 border-main-color'>
              zdjęcia
            </Link>
            , aby zapewnić, że Twoja strona działa z maksymalną prędkością.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Standart3;
