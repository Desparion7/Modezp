import Contact from './components/contact';
import Intro from './components/intro';
import Standards from './components/standards';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Description from './components/description';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ProfessionalService',
						name: 'Modezp Mateusz Woś - Tworzenie Stron Internetowych',
						image: 'https://modezp.com/logo.jpg',
						'@id': '',
						url: 'https://modezp.com/',
						telephone: '+48-796-390-226',
						openingHoursSpecification: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
								],
								opens: '08:00',
								closes: '16:00',
							},
						],
						sameAs: [
							'https://www.facebook.com/profile.php?id=61556577959946',
						],
						serviceArea: {
							'@type': 'AdministrativeArea',
							name: 'Polska',
						},
						services: [
							{
								'@type': 'Service',
								name: 'Projektowanie stron WWW',
								description:
									'Profesjonalne projektowanie i tworzenie stron internetowych dostosowanych do potrzeb Twojej firmy.',
							},
							{
								'@type': 'Service',
								name: 'Optymalizacja SEO',
								description:
									'Pełna optymalizacja SEO, która pomoże Twojej stronie osiągnąć wyższe pozycje w wynikach wyszukiwania.',
							},
						],
					})}
				</script>
			</Head>
			<Intro />
			<Services />
			<Portfolio />
			<Description />
			<Standards />
			<Contact />
		</>
	);
}
