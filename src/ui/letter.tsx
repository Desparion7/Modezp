import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
const Letter = ({
	children,
	orange,
}: Readonly<{
	children: React.ReactNode;
	orange?: boolean;
}>) => {
	const controls = useAnimationControls();
	const [isPlaying, setIsPlaying] = useState(false);

	const rubberBand = () => {
		controls.start({
			transform: [
				'scale3d(1, 1, 1)',
				'scale3d(1.4, .85, 1)',
				'scale3d(.75, 1.25, 1)',
				'scale3d(1.25, .85, 1)',
				'scale3d(.9, 1.05, 1)',
				'scale3d(1, 1, 1)',
			],
		});
		setIsPlaying(true);
	};
	return (
		<motion.span
			animate={controls}
			onMouseOver={() => {
				if (!isPlaying) rubberBand();
			}}
			onAnimationComplete={() => {
				setIsPlaying(false);
			}}
			className={cn('inline-block', { 'text-main-color': orange })}
		>
			{children}
		</motion.span>
	);
};

export default Letter;
