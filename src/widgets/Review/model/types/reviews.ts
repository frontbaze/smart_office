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
		id: 1,
		name: 'Lorem Lorem',
		avatar: MaleAvatarIcon,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae nam animi commodi. A quam, id provident dignissimos voluptas molestias asperiores. Repellendus dicta quidem commodi quibusdam odio et voluptas accusamus?',
		quotes: QoutesIcon,
	},
	{
		id: 2,
		name: 'Lorem Lorem',
		avatar: FemaleAvatarIcon,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae nam animi commodi. A quam, id provident dignissimos voluptas molestias asperiores. Repellendus dicta quidem commodi quibusdam odio et voluptas accusamus?',
		quotes: QoutesIcon,
	},
	{
		id: 3,
		name: 'Lorem Lorem',
		avatar: MaleAvatarIcon,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae nam animi commodi. A quam, id provident dignissimos voluptas molestias asperiores. Repellendus dicta quidem commodi quibusdam odio et voluptas accusamus?',
		quotes: QoutesIcon,
	},
];