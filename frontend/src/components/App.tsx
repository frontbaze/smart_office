import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { Navbar } from '../widgets/Navbar';
import { useState } from 'react';
import { ReviewForm } from '../widgets/Review';
import { Rooms } from '../widgets/Rooms';
import { MapSection } from '../widgets/MapSection';
import { MainSection } from '../widgets/MainSection';
import { Footer } from '../widgets/Footer';
import './index.scss';
import { AboutSection } from '../widgets/AboutSection';

export function App() {
	const [rating, setRating] = useState<number>(4);
	return (
		<div className='app'>
			<Navbar />
			<MainSection />
			<AboutSection />
			<Rooms />
			{/* <Rating rating={rating} setRating={setRating} isEditable /> */}
			<MapSection />
			<Footer />
		</div>
	);
}
