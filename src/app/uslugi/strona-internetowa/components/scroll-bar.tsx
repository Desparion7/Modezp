'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const heightProgress = useTransform(scrollYProgress, [0, 1], ['0%', '110%']);

  return (
    <motion.div
      ref={ref}
      style={{ height: heightProgress }}
      className='hidden lg:inline-block w-[3px] bg-main-color h-[110%] absolute right-0 mr-3
        lg:left-1/2 lg:-translate-x-1/2 top-[-10px]'
    />
  );
};

export default ScrollBar;
