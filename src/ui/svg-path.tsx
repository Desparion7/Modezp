import { motion } from 'framer-motion';
const Path = (props: any) => {
	return (
		<motion.path
			fill='transparent'
			strokeWidth='3'
			stroke='#e70a0a'
			strokeLinecap='round'
			{...props}
		/>
	);
};

export default Path;
