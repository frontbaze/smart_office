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
			<Helmet link={[{ rel: 'icon', href: 'public/favicon.ico' }]}>
				<title>Smart Office Hotel</title>
				<meta name='description' content='Забронировать отель во Владивостоке в центре города' />
				<meta name='keywords' content='отели Владивосток забронировать центр города' />
				<meta name='robots' content='index, follow' />
				<meta name='theme-color' content='#ffffff' />
				<link rel='canonical' href='https://smart-office-hotel.ru' />
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
