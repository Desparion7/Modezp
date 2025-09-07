import Head from 'next/head';
import Intro from './components/intro';
import Services from './components/services';
import Contact from './components/contact';
import Standards from './components/standards';

export default function Home() {
	return (
		<>
			<Head>
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ProfessionalService',
						name: 'Nauka Jazdy ELO Mateusz Woś - Ośrodek Szkolenia Kierowców',
						image: 'https://modezp.com/logo.jpg',
						'@id': '',
						url: 'https://modezp.com/',
						telephone: '+48-796-390-226',
						openingHoursSpecification: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: ['Monday', 'Wednesday'],
								opens: '09:00',
								closes: '11:00',
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
								name: 'Ośrodek Szkolenia Kierowców',
								description:
									'Profesjonalny Ośrodek Szkolenia Kierowców – prawo jazdy w Rzeszowie.',
							},
						],
					})}
				</script>
			</Head>
			<Intro />
			<Services />
			<Standards />
			<Contact />
		</>
	);
}
