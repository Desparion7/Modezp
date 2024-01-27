import Contact from './components/contact';
import Intro from './components/intro';
import Standards from './components/standards';
import Services from './components/services';

export default function Home() {
	return (
		<>
			<Intro />
			<Services />
			<Standards />
			<Contact />
		</>
	);
}
