import cn from 'classnames';
import cls from './ReviewSection.module.scss';
import { reviews } from '../../model/types/reviews';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';
import Sutochno from '../../../../shared/assets/images/sutochno.png';

export const ReviewSection = () => {
	return (
		<div id='reviews' className={cn(cls.ReviewSection)}>
			<div className={cls.title}>Отзывы наших клиентов</div>
			<div className={cls.reviewWrapper}>
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
			<div className={cls.recomendation}>
				<div className={cls.title}>Нас рекомнедуют на</div>
				<Link to={'https://vl.sutochno.ru/hotels/115924'}>
					<img width={200} src={Sutochno} alt="Суточно.ру" />
				</Link>
			</div>
			<div></div>
		</div>
	);
};
