import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import './index.scss';

export function App() {
	return (
		<div className='app'>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
			<Routes>
				<Route path='/about' element={<AboutPage />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</div>
	);
}
