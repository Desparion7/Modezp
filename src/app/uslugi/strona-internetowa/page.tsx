'use client';
import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';
import ScrollBar from './components/scroll-bar';
import StepCard from './components/step-card';
import EndingSection from './components/ending-section';
import ServicesNav from '../components/services-nav';

const WordPress = () => {
  const stepsData = [
    {
      title: 'PLAN',
      text: 'Podczas spotkania lub rozmowy telefonicznej ustalamy szczegóły projektu. Poznajemy wymagania i gust klienta. W trakcie wszystkich etapów jesteśmy w stałym kontakcie z klientami',
      step: 'Etap I',
    },
    {
      title: 'REALIZACJA',
      text: 'Następnym etapem jest realizacja. Projektując podchodzimy do każdego klienta indywidualnie. Mając na uwadze przede wszystkim gust Klienta oraz wymagania. Nie korzystamy z gotowych szablonów. Realizując projekt, na bieżąco informujemy o postępujących etapach',
      step: 'Etap II',
    },
    {
      title: 'GOTOWY PROJEKT',
      text: 'Na koniec przygotowany projekt przedstawiamy klientowi do akceptacji. Wprowadzamy ewentualne korekty, które są już zawarte w cenie',
      step: 'Etap III',
    },
  ];

  return (
    <div className='relative overflow-hidden'>
      <section
        className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10  text-white p-1 xl:p-0`}>
        <div className='absolute top-0 right-0 h-full w-full'>
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
                stron internetowych
              </span>
            </h1>
            <p className='text-sm lg:text-lg text-start sm:text-justify'>
              Oferujemy profesjonalne usługi tworzenia stron internetowych w{' '}
              <Link href='/uslugi/strona-internetowa/next-js'>
                <span className='text-main-color hover:border-b-2 border-main-color'>
                  Next.js{' '}
                </span>
              </Link>{' '}
              dla zaawansowanych projektów oraz w WordPressie dla tych z
              mniejszym budżetem. Specjalizujemy się w tworzeniu dynamicznych,
              wydajnych i{' '}
              <Link href='/blog/seo'>
                <span className='text-main-color hover:border-b-2 border-main-color'>
                  SEO{' '}
                </span>
              </Link>{' '}
              zoptymalizowanych witryn, dopasowanych do indywidualnych potrzeb i
              budżetu klienta.{' '}
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
            loading='lazy'
            className='hidden lg:inline-block lg:absolute w-full h-full min-h-[300px]  lg:h-[450px] top-[-160px]'
          />
          <Image
            alt=''
            src='/mobile-transition.png'
            width={1940}
            height={403}
            loading='lazy'
            className='absolute w-full h-[250px] top-[-100px] lg:hidden '
          />
        </div>
      </div>
      <section className='  relative' id='second-section'>
        <div className='w-full h-full  absolute mt-[80px] lg:mt-[100px]'>
          <Image
            alt=''
            src='/steps_bg.jpg'
            fill
            quality={50}
            loading='lazy'
            className='opacity-20 z-[-10] relative'
          />
        </div>
        <div className='container  mx-auto pb-20 relative'>
          <Image
            alt=''
            src='/decoration.png'
            width={214}
            height={259}
            loading='lazy'
            className='absolute w-[100px] top-[100px] rotate-180 opacity-80'
          />
          <Image
            alt=''
            src='/decoration.png'
            width={214}
            height={259}
            loading='lazy'
            className='absolute w-[200px] top-[100px] right-0 opacity-60'
          />
          <div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
            <SectionTitle style='text-main-bright-color border-b-transparent'>
              Jak działamy
            </SectionTitle>
          </div>

          <div className='z-40 relative mt-[10px] lg:mt-[50px] xl:mx-20'>
            <ScrollBar />
            {stepsData.map((d, index) => (
              <React.Fragment key={index}>
                <StepCard
                  text={d.text}
                  step={d.step}
                  title={d.title}
                  index={index}
                  style={
                    index === 0 ? 'lg:text-main-bright-color mt-[50px] ' : ''
                  }
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <EndingSection />
      <Contact />
    </div>
  );
};

export default WordPress;
