'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type StepCardType = {
  title: string;
  text: string;
  step: string;
  style?: string;
  index: number;
};

const StepCard = ({ title, text, step, style, index }: StepCardType) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className='relative flex flex-col items-center w-full mb-6 group'
      style={{
        transform: isInView
          ? 'none'
          : index % 2 === 0
          ? 'translateX(-100px)'
          : 'translateX(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}>
      <div className='w-full flex relative items-center  lg:group-[&:nth-child(3)]:justify-end p-2 lg:p-0'>
        <div className='h-auto w-[70%] lg:w-[400px] xl:w-[500px] flex flex-col items-center justify-center '>
          <h4
            className={cn(
              'text-main-color text-xl lg:text-3xl font-bold mb-2 lg:mb-4',
              style
            )}>
            {title}
          </h4>
          <p className='bg-white px-[10px] py-[15px] lg:text-center shadow-2xl text-sm'>
            {text}
          </p>
        </div>
        <div
          className='bg-black opacity-95 w-[70px] h-[70px]  md:h-[80px] md:w-[80px] rounded-full border-4 border-main-color absolute 
           right-0 md:right-[5%] mr-3 lg:mr-0 mt-[50px]
          lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center text-main-bright-color'>
          {step}
        </div>
      </div>
    </motion.div>
  );
};
export default StepCard;
