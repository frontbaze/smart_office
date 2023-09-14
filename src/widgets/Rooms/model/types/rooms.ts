import room1 from '../../../../shared/assets/images/room1.jpg';
import room2 from '../../../../shared/assets/images/room2.jpg';
import room3 from '../../../../shared/assets/images/room3.jpg';
import room4 from '../../../../shared/assets/images/room4.jpg';
import room5 from '../../../../shared/assets/images/room5.jpg';
import room6 from '../../../../shared/assets/images/room6.jpg';
import room7 from '../../../../shared/assets/images/room7.jpg';
import room8 from '../../../../shared/assets/images/room8.jpg';
import vip1 from '../../../../shared/assets/images/vip1.jpg';
import vip2 from '../../../../shared/assets/images/vip2.jpg';
import vip3 from '../../../../shared/assets/images/vip3.jpg';
import vip4 from '../../../../shared/assets/images/vip4.jpg';

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
		slides: [room1, room2, room3, room4, room5, room6, room7],
		title: 'Стандартный',
		person: '1 - 2 человека',
		price: 3000,
		info: ['Размер 22 - 24 кв. м.', 'Большая двуспальная кровать', 'Быстрый интернет'],
	},
	{
		id: 2,
		slides: [vip1, vip2, vip3, vip4],
		title: 'VIP',
		person: '1 - 3 человека',
		price: 4000,
		info: ['Размер 22 - 24 кв. м.', 'Большая двуспальная кровать', 'Мини-бар, чайник, кофеварка'],
	},
];
