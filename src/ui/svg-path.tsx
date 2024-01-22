import { motion } from 'framer-motion';
const Path = (props: any) => {
	return (
		<motion.path
			fill='transparent'
			strokeWidth='3'
			stroke='#1e7bc2'
			strokeLinecap='round'
			{...props}
		/>
	);
};

export default Path;
