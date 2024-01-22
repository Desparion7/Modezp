'use client';
import SectionHeader from '@/components/section-header';
import { motion } from 'framer-motion';

const NextShortInfo = () => {
	return (
		<section className='container mx-auto my-10 md:my-20'>
			<motion.div
				className='w-[100%]  flex flex-col justify-between text-center sm:text-left'
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<SectionHeader>Piszemy strony w next.js</SectionHeader>
				<p className='sm:text-lg md:text-xl tracking-wider mx-2 sm:mx-0'>
					Dlaczego warto posiadać stronę w Next.js? Next.js to potężny
					framework React, oferujący Server Side Rendering (SSR) i
					Generowanie Statycznych Stron (SSG). Zapewnia szybsze
					ładowanie, lepsze SEO, łatwe zarządzanie frontendem i
					backendem, rozwiązanie problemów związanych z renderowaniem
					JavaScript, oraz cieszy się rosnącą popularnością wśród
					firm. Idealny wybór do tworzenia szybkich i nowoczesnych
					stron internetowych.
				</p>
			</motion.div>
		</section>
	);
};

export default NextShortInfo;
