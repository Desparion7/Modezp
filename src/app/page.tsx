import Intro from '@/app/components/intro';
import Introduction from '@/app/components/introduction';
import Standards from './components/standards';
import NextShortInfo from './components/next-short-info';
import Contact from './components/contact';

export default function Home() {
	return (
		<>
			<Intro />
			<Introduction />
			<NextShortInfo />
			<Standards />
			<Contact />
		</>
	);
}
