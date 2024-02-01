import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';

const Shop = () => {
	return (
		<div>
			<section
				className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10  text-white`}
			>
				<div>
					<Image
						src='/background.jpg'
						alt='backgorund'
						sizes='100vw'
						fill
						priority={true}
						className='object-cover z-[-3]'
					/>
				</div>
				<div className='relative top-[-7vh] container xl:px-64 p-5 py-28 flex flex-col gap-6 z-2'>
					<div className='sm:mb-5 md:min-h-[24vh] bg-black bg-opacity-80 p-3  shadow-md shadow-main-color'>
						<h2 className='uppercase text-center text-xl lg:text-2xl md:text-3xl mb-6'>
							Profesjonalne tworzenie{' '}
							<span className='text-main-color'>
								sklepów internetowych
							</span>{' '}
							(e-commerce)
						</h2>
						<p className='text-md md:text-lg text-center sm:text-justify'>
							Oferujemy profesjonalne usługi tworzenia sklepów
							internetowych opartych na popularnym systemie
							zarządzania treścią,{' '}
							<Link href='/strona-internetowa/word-press'>
								<span className='text-main-color hover:border-b-2 border-main-color'>
									WordPress{' '}
								</span>
							</Link>
							, w połączeniu z potężnym narzędziem do e-commerce,
							jakim jest WooCommerce.
						</p>
					</div>
					<div className='flex flex-col md:flex-row flex-wrap justify-center gap-5'>
						<LinkSmallCard
							title={'Strona internetowa'}
							link={'/uslugi/strona-internetowa'}
						/>
						<LinkSmallCard
							title={'Strona w Next.js'}
							link={'/uslugi/strona-internetowa/next-js'}
						/>
						<LinkSmallCard
							title={'Strona w WordPress'}
							link={'/uslugi/strona-internetowa/word-press'}
						/>
						<LinkSmallCard
							active={true}
							title={'Sklep Internetowy'}
							link={'/uslugi/sklep'}
						/>
						<LinkSmallCard title={'Logo'} link={'/uslugi/logo'} />
						<LinkSmallCard
							title={'Projektowanie UI'}
							link={'/uslugi/strona-internetowa/projektowanie-ui'}
						/>
					</div>
				</div>
				<ScrollDownBtn />
			</section>
			<section
				className='relative container mx-auto pb-20 min-h-[65vh]'
				id='second-section'
			>
				<div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
					<SectionTitle>sklep internetowy (e-commerce)</SectionTitle>
				</div>
				<div className='mx-5 text-md xl:mx-80 xl:text-lg'>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Rozwój twojego sklepu internetowego
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Rozwój branży e-commerce otwiera przed
							przedsiębiorcami nowe możliwości, a my jesteśmy
							tutaj, aby pomóc Ci wykorzystać je w pełni. Jeśli
							marzysz o własnym sklepie internetowym, który nie
							tylko przyciąga klientów, ale również zachęca ich do
							zakupów, to nasza oferta jest właśnie dla Ciebie.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Dostosowane rozwiązania dla każdego biznesu:
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Dobór odpowiedniego rozwiązania do tworzenia małego
							lub dużego sklepu internetowego jest kluczowym
							krokiem w procesie e-commerce. Istnieje wiele
							czynników, które należy wziąć pod uwagę, aby
							osiągnąć sukces w prowadzeniu sklepu online. Po
							pierwsze, ważne jest zrozumienie swoich potrzeb i
							celów biznesowych. Małe sklepy mogą skorzystać z
							prostszych, gotowych platform e-commerce, takich jak
							Shopify lub WooCommerce, które oferują wiele
							gotowych rozwiązań i są stosunkowo łatwe w obsłudze.
							Dla większych sklepów, które mają bardziej
							zaawansowane wymagania, rozważenie niestandardowych
							rozwiązań opartych na systemach takich jak Magento
							lub PrestaShop może być konieczne.
						</p>
						<p className='pb-5 leading-8 text-justify'>
							Należy także rozważyć kwestie budżetowe i koszty
							utrzymania sklepu internetowego. W zależności od
							wybranej platformy, mogą pojawić się koszty
							licencji, hostingowe oraz opłaty za dodatkowe
							funkcje. Dlatego ważne jest oszacowanie, ile można
							przeznaczyć na rozwijanie i utrzymanie sklepu
							online.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Tworzenie doświadczenia użytkownika i zwiększanie
							sprzedaży
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Tworzenie sklepu internetowego to nie tylko kwestia
							techniczna. To także budowanie doświadczenia
							użytkownika, które zachęca do dłuższego przebywania
							na stronie i powracania. Zrozumienie i spełnienie
							oczekiwań klientów to klucz do zwiększenia
							sprzedaży. Dlatego oferujemy integrację z
							zaawansowanymi systemami płatności, takimi jak PayU
							czy PayByLink, które znacznie ułatwiają proces
							zakupowy.
						</p>
					</div>
					<div className='mt-10'>
						<h3 className='text-xl sm:text-2xl pb-5'>
							Wsparcie na każdym etapie Twojej drogi w E-commerce
						</h3>
						<p className='pb-5 leading-8 text-justify'>
							Pamiętaj, że stworzenie sklepu internetowego to
							dopiero początek Twojej drogi w e-commerce. Chętnie
							będziemy Cię wspierać na każdym etapie, pomagając
							przekształcić odwiedzających w lojalnych klientów.
							Zacznijmy razem tworzyć Twoją przyszłość w świecie
							cyfrowego handlu!
						</p>
					</div>
				</div>
			</section>
			<Contact />
		</div>
	);
};

export default Shop;
