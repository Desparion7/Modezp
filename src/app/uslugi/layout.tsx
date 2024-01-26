import ServiceCategoryLink from './components/service-category-link';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className='container mx-auto min-h-[80vh]'>
			<div className='flex flex-row justify-center gap-3 w-[100%] my-5'>
				<ServiceCategoryLink>strony internetowe</ServiceCategoryLink>
				<ServiceCategoryLink>sklep internetowy</ServiceCategoryLink>
				<ServiceCategoryLink>logo</ServiceCategoryLink>
			</div>
			<div>{children}</div>
		</section>
	);
}
