'use client';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import { motion } from 'framer-motion';

type ServicesNavType = {
  children: React.ReactNode;
};

const ServicesNav = ({ children }: ServicesNavType) => {
  return (
    <motion.div
      className='relative top-[-7vh] container flex flex-col gradiend w-full md:w-3/4  
             py-3 px-5 xl:py-5 xl:px-10 mt-2 lg:mt-0'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <div className='flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-4 xl:gap-6 mb-2 xl:mb-5'>
        <LinkSmallCard
          title={'Strona internetowa'}
          link={'/uslugi/strona-internetowa'}
        />

        <LinkSmallCard title={'Sklep Internetowy'} link={'/uslugi/sklep'} />
        <LinkSmallCard title={'Logo'} link={'/uslugi/logo'} />
        <LinkSmallCard
          title={'Projektowanie UI'}
          link={'/uslugi/projektowanie-ui'}
        />
      </div>
      {children}
    </motion.div>
  );
};

export default ServicesNav;
