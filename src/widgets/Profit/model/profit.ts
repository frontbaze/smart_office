import MapIcon from '../../../shared/assets/icons/map.svg';
import WifiIcon from '../../../shared/assets/icons/wifi.svg';

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
];
