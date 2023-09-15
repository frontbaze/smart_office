import MaleAvatarIcon from '../../../../shared/assets/icons/male.svg';
import FemaleAvatarIcon from '../../../../shared/assets/icons/female.svg';
import QoutesIcon from '../../../../shared/assets/icons/quotes.svg';

export interface Review {
	id: number;
	name: string;
	avatar: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	description: string;
	quotes: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const reviews: Review[] = [
	{
		id: 14,
		name: 'Анна',
		avatar: FemaleAvatarIcon,
		description:
			'Понравилось абсолютно все: обслуживание, расположение и т.п. В номере все необходимое имеется, возможен ранний заезд. Хозяин отличный.',
		quotes: QoutesIcon,
	},
	{
		id: 15,
		name: 'Сергей',
		avatar: MaleAvatarIcon,
		description:
			'Отличная гостиница! В историческом центре города. Соотношение цена- качество идеальное. Очень понравился хозяин и персонал: очень вежливые, выполняют все просьбы, в том числе в случае возникновения форс-мажорных обстоятельств. Очень рекомендую.',
		quotes: QoutesIcon,
	},
	{
		id: 16,
		name: 'Руслан',
		avatar: MaleAvatarIcon,
		description:
			'Центр. Всё близко. Вокзал, магазины, столовые, набережные, парк!!! В номере всё необходимое для проживания. Бонус:вода, чай, кофе и др. Если, что-то нужно - Администрация предоставляет быстро и бесплатно!!! Рекомендуем.',
		quotes: QoutesIcon,
	},
	{
		id: 17,
		name: 'Екатерина',
		avatar: FemaleAvatarIcon,
		description:
			'Понравилось абсолютно всё, начиная с первого впечатления, заканчивая детальным изучением номера. Учтивость хозяина поразила, все до мелочей предусмотрено для комфортного проживания. Буду рекомендовать знакомым и, в случае посещения Владивостока, выбирать для проживания именно это место. Восторг!',
		quotes: QoutesIcon,
	},
	{
		id: 18,
		name: 'Алексей',
		avatar: MaleAvatarIcon,
		description:
			'В отеле есть все необходимое для комфортного проживания, а именно: бесплатная прачечная с возможностью быстрой сушки вещей; кондиционер (летом довольно нужная вещь); кулер с водой в холле отеля; холодильник и т.д. Также хотелось бы отметить великолепную работу владельца отеля, который все объяснил и на протяжении проживания интересовался все ли в порядке.',
		quotes: QoutesIcon,
	},
	{
		id: 19,
		name: 'Мария',
		avatar: FemaleAvatarIcon,
		description:
			'Прожили 3 ночи все очень понравилось! Расположение хорошее, есть все в пешей доступности. Комнаты чистые, белое постельное белье, есть кондиционер, можно менять полотенца хоть каждый день, есть чай, кофе, шампунь, гель, зубная щетка с пастой. Очень внимательные  отзывчивые хозяева.',
		quotes: QoutesIcon,
	},
	{
		id: 20,
		name: 'Полина',
		avatar: FemaleAvatarIcon,
		description:
			'Замечательная гостиница! Прекрасные отзывчивые хозяева! Терпеливо отвечали на все мои вопросы, очень участливо относятся к своим гостям, после бронирования сразу вышли на связь, была возможность задать вопросы и договориться о необходимом. Все необходимое есть в номере, вплоть до зубной щетки. Хорошая кровать, качественный текстиль, вся техника (кондиционер, чайник, микроволновка, телевизор, холодильник, водонагреватель) работает исправно, все новое.Расположение идеальное, весь центр в пешей доступности! Рекомендую от души!',
		quotes: QoutesIcon,
	},
	{
		id: 21,
		name: 'Евгения',
		avatar: FemaleAvatarIcon,
		description:
			'Отличный отель, удачное месторасположение, хозяин отличный, всегда поможет, подскажет и расскажет. В номере достаточно тихо, соседей не слышно, лайк за систему открывания дверей в номер и в отель (только код и все), очень удобно нет страха потерять ключ или ключ-карту. В номере есть все необходимое и даже больше,  чай, кофе, вода, чайник, фен, свежие полотенца, тапочки. Нам очень  повезло заселиться раньше, за это огромное спасибо Алексею! Отель отличный, 10 из 10',
		quotes: QoutesIcon,
	},
];
