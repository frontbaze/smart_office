import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { Navbar } from '../widgets/Navbar';
import { Rating } from '../shared/ui/Rating/Rating';
import { useState } from 'react';
import { ReviewForm } from '../widgets/Review';
import './index.scss';
import { Rooms } from '../widgets/Rooms';
import { MapSection } from '../widgets/MapSection';

export function App() {
	const [rating, setRating] = useState<number>(4)
	return (
		<div className='app'>
			<Navbar />
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
