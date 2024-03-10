'use client';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type LinkSmallCardType = {
  active?: boolean;
  title: string;
  link: string;
};

const LinkSmallCard = ({ active, title, link }: LinkSmallCardType) => {
  const location = usePathname();
  const isActive = location === link;
  return (
    <Link href={link} className='relative z-8'>
      <motion.div className='group'>
        <h3
          className={cn(
            'flex justify-center items-centertext-center text-md group-hover:text-main-color text-sm sm:text-base lg:text-xl duration-75',
            {
              'text-main-color font-bold': isActive,
            }
          )}>
          {title}
          <span className='ml-2 flex md:hidden items-center justify-center'>
            <FaArrowRightLong />
          </span>
        </h3>
      </motion.div>
    </Link>
  );
};

export default LinkSmallCard;
