'use client';
import { motion } from 'framer-motion';

const ServiceCategoryLink = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='w-[100%]'>
			<div className='flex flex-col gap-3 py-5 justify-center items-center cursor-pointer'>
				<div className='example'></div>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default ServiceCategoryLink;
