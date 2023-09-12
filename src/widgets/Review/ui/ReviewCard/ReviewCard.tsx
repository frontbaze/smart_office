import cn from 'classnames';
import cls from './ReviewCard.module.scss';
import Icon from '../../../../shared/ui/Icon/Icon';
import Star from '../../../../shared/assets/icons/star.svg';

interface ReviewCardProps {
	name: string;
	avatar: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	description: string;
	quotes: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const ReviewCard = (props: ReviewCardProps) => {
	const { name, avatar, description, quotes } = props;
	return (
		<div className={cn(cls.ReviewCard)}>
			<Icon Svg={quotes} className={cls.quotes} />
			<div className={cls.description}>{description}</div>
			<div className={cls.stars}>
				<Icon Svg={Star} className={cls.star} />
				<Icon Svg={Star} className={cls.star} />
				<Icon Svg={Star} className={cls.star} />
				<Icon Svg={Star} className={cls.star} />
				<Icon Svg={Star} className={cls.star} />
			</div>
			<Icon Svg={avatar} className={cls.avatar} />
			<div className={cls.name}>{name}</div>
		</div>
	);
};
