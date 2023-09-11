import { Navbar } from '../widgets/Navbar';
import { Rooms } from '../widgets/Rooms';
import { MapSection } from '../widgets/MapSection';
import { MainSection } from '../widgets/MainSection';
import { Footer } from '../widgets/Footer';
import { AboutSection } from '../widgets/AboutSection';
import { ReviewSection } from '../widgets/Review';
import './index.scss';

export function App() {
	return (
		<div className='app'>
			<Navbar />
			<MainSection />
			<AboutSection />
			<Rooms />
			<ReviewSection />
			<MapSection />
			<Footer />
		</div>
	);
}
