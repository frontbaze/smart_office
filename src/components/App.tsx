import { Navbar } from '../widgets/Navbar';
import { Rooms } from '../widgets/Rooms';
import { MapSection } from '../widgets/MapSection';
import { MainSection } from '../widgets/MainSection';
import { Footer } from '../widgets/Footer';
import { AboutSection } from '../widgets/AboutSection';
import { ReviewSection } from '../widgets/Review';
import { Element } from 'react-scroll';
import { ProfitSection } from '../widgets/Profit';
import './index.scss';
import { Helmet } from 'react-helmet-async';

export function App() {
	return (
		<>
			<Helmet>
				<title>Smart Office Hotel - Забронировать отель во Владивостоке в центре города</title>
				<meta
					name='description'
					content='Забронировать отель в центре города Владивосток с отличным сервисом и уютными номерами'
				/>
				<meta name='keywords' content='отели Владивосток забронировать центр города' />
				<meta name='robots' content='index, follow' />
				<link rel='canonical' href='/' />
				<link rel='icon' href='../shared/assets/icons/favicon.ico' />
			</Helmet>
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
		</>
	);
}
