import Contact from './components/contact';
import Intro from './components/intro';
import Standards from './components/standards';
import Services from './components/services';
import Portfolio from './components/portfolio';

export default function Home() {
	return (
		<>
			<Intro />
			<Services />
			<Portfolio />
			<Standards />
			<Contact />
		</>
	);
}
