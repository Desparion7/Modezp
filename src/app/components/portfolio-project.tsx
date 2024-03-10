import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Image from 'next/image';

type PortfolioProjectPropsType = {
  side: string;
  link: string;
  backgroundColor: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  text: string;
  textColor: string;
};

const PortfolioProject = ({
  side,
  link,
  backgroundColor,
  src,
  alt,
  width,
  height,
  title,
  text,
  textColor,
}: PortfolioProjectPropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      opacity: 1,
      scale: 1.0,
      transition: { duration: 0.3 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: 0, scale: 1, transition: { duration: 0.3 } });
  };

  return (
    <>
      {side === 'right' ? (
        <div
          className={`flex flex-col justify-around lg:flex-row w-[100%] ${backgroundColor}`}>
          <motion.div
            className='relative mr-auto w-[100%] lg:w-[50%] lg:pr-10 group'
            ref={ref}
            style={{
              scale: scaleProgess,
            }}
            viewport={{
              once: true,
            }}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <div className='relative w-full h-auto'>
                <motion.div
                  className='absolute inset-0 hidden lg:flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 ease-in-out'
                  initial={{ opacity: 0, scale: 1 }}
                  animate={controls}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <motion.button
                    name='free consultation'
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    className='opacity-0 group-hover:opacity-100 bg-button-background outline-none text-white text-md lg:text-md py-2 px-4 rounded-3xl  hover:bg-button-background-hover transition-all uppercase'>
                    Pokaż stronę
                  </motion.button>
                </motion.div>
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes='100vw'
                  className='w-full h-auto'
                  loading='lazy'
                />
              </div>
            </a>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center lg:hidden'>
              <button
                name='free consultation'
                className=' bg-button-background outline-none text-white text-sm py-2 px-4 rounded-3xl mt-5'>
                Pokaż stronę
              </button>
            </a>
          </motion.div>
          <motion.div
            className={`flex flex-col mx-auto sm:gap-5 justify-center p-2 sm:p-10 mb-10 lg:w-[50%] ${textColor}`}
            initial={{ opacity: 0, translateX: '-30px' }}
            whileInView={{ opacity: 1, translateX: '0' }}
            transition={{ ease: 'easeOut', duration: 1 }}
            viewport={{
              once: true,
            }}>
            <div className='absolute right-0 top-0 lg:right-[2%]  lg:top-[20px] '>
              <Image
                alt=''
                src='/corner.png'
                width={69}
                height={65}
                className=' opacity-55 w-[50px]'
              />
            </div>
            <div className='absolute left-0 lg:left-[-50px] lg:bottom-0 bottom-[-20px] rotate-180 w-[50px] lg:w-[100px]'>
              <Image
                alt=''
                src='/corner.png'
                width={69}
                height={65}
                className='opacity-55 w-[50px]'
              />
            </div>
            <h2 className='text-md md:text-2xl xl:text-2xl font-semibold my-2'>
              {title}
            </h2>
            <p className='text-sm md:text-lg xl:text-xl italic'>{text}</p>
          </motion.div>
        </div>
      ) : (
        <div
          className={`relative flex flex-col lg:flex-row w-[100%]  ${backgroundColor}`}>
          <motion.div
            className={`flex flex-col order-last lg:order-first mx-auto sm:gap-5 mb-10 justify-center p-2 sm:p-10 w-[100%] lg:w-[50%] ${textColor}`}
            initial={{ opacity: 0, translateX: '-30px' }}
            whileInView={{ opacity: 1, translateX: '0' }}
            transition={{ ease: 'easeOut', duration: 1 }}
            viewport={{
              once: true,
            }}>
            <div className='absolute right-0 top-0 lg:right-[2%]  lg:top-[20px] '>
              <Image
                alt=''
                src='/corner.png'
                width={69}
                height={65}
                className=' opacity-55 w-[50px]'
              />
            </div>
            <div className='absolute left-0 lg:left-[-50px] lg:bottom-0 bottom-[-20px] rotate-180 w-[50px] lg:w-[100px]'>
              <Image
                alt=''
                src='/corner.png'
                width={69}
                height={65}
                className='opacity-55 w-[50px]'
              />
            </div>
            <h2 className='text-md md:text-2xl xl:text-2xl font-semibold my-2'>
              {title}
            </h2>
            <p className='text-sm md:text-lg xl:text-xl italic'>{text}</p>
          </motion.div>
          <motion.div
            className='relative ml-auto w-[100%] lg:w-[50%] lg:pl-10 group'
            ref={ref}
            style={{
              scale: scaleProgess,
            }}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <div className='relative w-full h-auto'>
                <motion.div
                  className='absolute hidden lg:flex inset-0  justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 ease-in-out'
                  initial={{ opacity: 0, scale: 1 }}
                  animate={controls}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <motion.button
                    name='free consultation'
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    className='opacity-0 group-hover:opacity-100 bg-button-background outline-none text-white text-md lg:text-md py-2 px-4 rounded-3xl  hover:bg-button-background-hover transition-all uppercase'>
                    Pokaż stronę
                  </motion.button>
                </motion.div>
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes='100vw'
                  className='w-full h-auto'
                  loading='lazy'
                />
              </div>
            </a>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center lg:hidden'>
              <button
                name='free consultation'
                className=' bg-button-background outline-none text-white text-sm py-2 px-4 rounded-3xl mt-5'>
                Pokaż stronę
              </button>
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PortfolioProject;
