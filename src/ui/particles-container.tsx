import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
	// init
	const customInit = useCallback(async (engine: any) => {
		// This adds the bundle to tsParticles
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async () => {}, []);

	return (
		<Particles
			className='w-full h-full absolute translate-z-0 z-100'
			id='tsparticles'
			init={customInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: '',
					},
				},
				fps_limit: 30,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 90,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#e03600',
					},
					links: {
						color: '#e03600',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 60,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesContainer;
