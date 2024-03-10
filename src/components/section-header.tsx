'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionTitleType = {
  children: React.ReactNode;
  style?: string;
};
const SectionTitle = ({ children, style }: SectionTitleType) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className='relative mb-5'>
      <h2
        className={cn(
          'text-2xl md:text-4xl uppercase  font-bold text-third-color border-b-4 border-b-main-color',
          style
        )}>
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
