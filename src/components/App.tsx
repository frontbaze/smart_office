import { Navbar } from '../widgets/Navbar';
import { Rooms } from '../widgets/Rooms';
import { MapSection } from '../widgets/MapSection';
import { MainSection } from '../widgets/MainSection';
import { Footer } from '../widgets/Footer';
import { AboutSection } from '../widgets/AboutSection';
import { ReviewSection } from '../widgets/Review';
import { Element } from 'react-scroll';
import './index.scss';
import { ProfitSection } from '../widgets/Profit';

export function App() {
	return (
		<div className='app'>
			<Navbar />
			<MainSection />
			<Element name='about'>
				<AboutSection />
			</Element>
			<Element name='rooms'>
				<Rooms />
			</Element>
			<ProfitSection />
			<Element name='reviews'>
				<ReviewSection />
			</Element>
			<Element name='map'>
				<MapSection />
			</Element>
			<Footer />
		</div>
	);
}
