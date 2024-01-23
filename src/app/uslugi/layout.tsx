export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className='container mx-auto min-h-[80vh]'>
			<div className='flex flex-row justify-center gap-3 w-[100%] my-5'>
				<div className=' bg-gray-400 w-[100%]'>
					<div className='flex flex-col gap-3 py-5 text-center'>
						<div>Grafika</div>
						<p>Strony internetowe</p>
					</div>
				</div>
				<div className=' bg-gray-400 w-[100%]'>
					<div className='text-center'>
						<div>Grafika</div>
						<p>Sklep internetowy</p>
					</div>
				</div>
				<div className=' bg-gray-400 w-[100%]'>
					<div className='text-center'>
						<div>Grafika</div>
						<p>Logo</p>
					</div>
				</div>
			</div>
			<div>{children}</div>
		</section>
	);
}
