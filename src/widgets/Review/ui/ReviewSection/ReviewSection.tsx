import cn from 'classnames';
import cls from './ReviewSection.module.scss';
import { reviews } from '../../model/types/reviews';
import { ReviewCard } from '../ReviewCard/ReviewCard';

export const ReviewSection = () => {
	return (
		<div id='reviews' className={cn(cls.ReviewSection)}>
			{reviews.map((item) => (
				<ReviewCard
					key={item.id}
					description={item.description}
					quotes={item.quotes}
					name={item.name}
					avatar={item.avatar}
				/>
			))}
		</div>
	);
};
