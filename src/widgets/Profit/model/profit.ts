import MapIcon from '../../../shared/assets/icons/map.svg';
import WifiIcon from '../../../shared/assets/icons/wifi.svg';
import AirIcon from '../../../shared/assets/icons/air.svg';
import LaundryIcon from '../../../shared/assets/icons/laundry.svg';
import BathroomIcon from '../../../shared/assets/icons/bathroom.svg';
import TeaIcon from '../../../shared/assets/icons/tea.svg';

export interface Profit {
    id: number;
	icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	title: string;
	subtitle: string;
}

export const profits: Profit[] = [
	{
		id: 1,
		icon: WifiIcon,
		title: 'Wi-fi на всей территории',
		subtitle: 'Бесплатный скоростной интернет доступен на территории всего отеля',
	},
	{
		id: 2,
		icon: MapIcon,
		title: 'Удобное месторасположение',
		subtitle: 'Мы располагаемся в самом центре города, недалеко от сквера Суханова',
	},
	{
		id: 3,
		icon: AirIcon,
		title: 'Кондиционер',
		subtitle: 'Поможет сделать микроклимат в номере более комфортным',
	},
	{
		id: 4,
		icon: LaundryIcon,
		title: 'Бесплатные услуги прачечной',
		subtitle: 'Вы можете быстро постирать и погладить свои вещи',
	},
	{
		id: 5,
		icon: BathroomIcon,
		title: 'Персональный санузел',
		subtitle: 'Каждый номер оборудован туалетом, раковиной и душевой кабиной',
	},
	{
		id: 6,
		icon: TeaIcon,
		title: 'Чайная станция',
		subtitle: 'В любое время вы можете сделать себе чай или ароматный кофе',
	},
];
