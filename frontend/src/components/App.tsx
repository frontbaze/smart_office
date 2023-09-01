import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { Navbar } from '../widgets/Navbar';
import { useState } from 'react';
import { ReviewForm } from '../widgets/Review';
import { Rooms } from '../widgets/Rooms';
import { MapSection } from '../widgets/MapSection';
import { MainSection } from '../widgets/MainSection';
import './index.scss';

export function App() {
	const [rating, setRating] = useState<number>(4)
	return (
		<div className='app'>
			<Navbar />
			<MainSection />
			<Rooms />
			{/* <Rating rating={rating} setRating={setRating} isEditable /> */}
			<MapSection />
			<ReviewForm rating={rating} setRating={setRating} />
			<Routes>
				<Route path='/about' element={<AboutPage />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</div>
	);
}
