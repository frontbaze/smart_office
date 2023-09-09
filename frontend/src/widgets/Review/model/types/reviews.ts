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
    { id: 1, name: 'Vasya Pupkin', avatar: MaleAvatarIcon, description: 'asdasdasd', quotes: QoutesIcon},
    { id: 2, name: 'Liza Malina', avatar: FemaleAvatarIcon, description: 'asdasdasd', quotes: QoutesIcon},
    { id: 3, name: 'Kerk Perk', avatar: MaleAvatarIcon, description: 'asdasdasd', quotes: QoutesIcon},
]