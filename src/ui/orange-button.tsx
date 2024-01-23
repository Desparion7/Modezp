type OragneButtonPropsType = {
	children: React.ReactNode;
};

const OrangeButton = ({ children }: OragneButtonPropsType) => {
	return (
		<button className='bg-button-background outline-none text-white text-md lg:text-lg py-2 px-4 rounded-xl  hover:bg-orange-600 transition-all'>
			{children}
		</button>
	);
};

export default OrangeButton;
