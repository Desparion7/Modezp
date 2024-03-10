import SectionTitle from '@/components/section-header';
import React from 'react';
import Standart from './standart';
import Standart2 from './standart2';
import Standart3 from './standart3';
import Standart4 from './standart4';
import Image from 'next/image';

const Standards = () => {
  return (
    <section className='relative container mx-auto sm:px-5 my-5  pb-20 overflow-hidden'>
      <div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center sm:text-left'>
        <SectionTitle>Nasze standardy</SectionTitle>
      </div>
      <div className='absolute w-[100px] opacity-40'>
        <Image
          alt=''
          src='/decoration-black.png'
          width={214}
          height={259}
          className=''
        />
      </div>
      <div className='absolute w-[150px] right-[10%] top-1/2 rotate-45 opacity-40'>
        <Image
          alt=''
          src='/decoration-black.png'
          width={214}
          height={259}
          className=''
        />
      </div>
      <div className='absolute w-[150px] right-1/2 top-3/4 rotate-45 opacity-40'>
        <Image
          alt=''
          src='/decoration-black.png'
          width={214}
          height={259}
          className=''
        />
      </div>
      <Standart />
      <Standart2 />
      <Standart3 />
      <Standart4 />
    </section>
  );
};

export default Standards;
