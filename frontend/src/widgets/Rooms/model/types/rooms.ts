import Photo1 from '../../../../shared/assets/images/photo-1.jpg';
import Photo2 from '../../../../shared/assets/images/photo-2.jpg';
import Photo3 from '../../../../shared/assets/images/photo-3.jpg';
import Photo4 from '../../../../shared/assets/images/photo-7.jpg';
import Photo5 from '../../../../shared/assets/images/photo-8.jpg';
import Photo6 from '../../../../shared/assets/images/photo-9.jpg';

export interface Rooms {
	id: number;
	slides: string[];
	title: string;
	person: string;
	price: number;
	info: string[];
}

export const rooms: Rooms[] = [
	{
		id: 1,
		slides: [
			Photo1,
			Photo2,
			Photo3,
		],
		title: 'Стандартный',
		person: '1 - 2 человека',
		price: 2000,
		info: ['Размер 22 - 24 кв. м.', 'Большая двуспальная кровать', 'Быстрый интернет'],
	},
	{
		id: 2,
		slides: [
			Photo4,
			Photo5,
			Photo6,
		],
		title: 'VIP',
		person: '1 - 3 человека',
		price: 2500,
		info: ['Размер 22 - 24 кв. м.', 'Большая двуспальная кровать', 'Мини-бар, чайник, кофеварка'],
	},
];
