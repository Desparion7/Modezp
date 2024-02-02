import Image from 'next/image';
import React from 'react';

const NotFound = () => {
	return (
		<div className='relative min-h-[91vh] flex flex-col justify-center items-center text-center'>
			<div>
				<Image
					src='/error.png'
					alt='błąd 404'
					height={603}
					width={349}
				/>
			</div>
			<div>
				<h3 className='text-center text-lg sm:text-2xl '>
					Niestety dana strona nie istnieje!
				</h3>
			</div>
		</div>
	);
};

export default NotFound;
