import React from 'react';

type SectionHeaderType = {
	children: React.ReactNode;
};
const SectionHeader = ({ children }: SectionHeaderType) => {
	return (
		<>
			<h2 className='text-xl sm:text-2xl md:text-3xl uppercase mb-5 pb-3  border-b-blue-600 border-b-2'>
				{children}
			</h2>
		</>
	);
};

export default SectionHeader;
