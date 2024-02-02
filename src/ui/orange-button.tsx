import { motion } from 'framer-motion';

type OragneButtonPropsType = {
	children: React.ReactNode;
};

const OrangeButton = ({ children }: OragneButtonPropsType) => {
	return (
		<motion.button
			name='free consultation'
			whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
			className='bg-button-background outline-none text-white text-md lg:text-lg py-3 px-6 rounded-3xl  hover:bg-button-background-hover transition-all uppercase'
		>
			{children}
		</motion.button>
	);
};

export default OrangeButton;
