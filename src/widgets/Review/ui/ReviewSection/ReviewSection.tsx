import cn from 'classnames';
import cls from './ReviewSection.module.scss';
import { reviews } from '../../model/types/reviews';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import Sutochno from '../../../../shared/assets/images/sutochno.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { memo, useCallback, useEffect, useState } from 'react';

export const ReviewSection = memo(() => {
	const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

	const changeSlidesPerView = useCallback(() => {
		let slidesPerView = 3;
		if (clientWidth <= 1200) {
			slidesPerView = 2;
		}
		if (clientWidth <= 830) {
			slidesPerView = 1;
		}
		return slidesPerView;
	}, [clientWidth]);
	useEffect(() => {
		const handleResize = () => {
			setClientWidth(document.documentElement.clientWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<section className={cn(cls.ReviewSection)}>
			<h2 className={cls.title}>Отзывы наших гостей</h2>
			<h3 className={cls.subtitle}>Ещё больше отзывов можно найти на сервисе бронирования - Суточно.ру</h3>
			<Swiper
				className={cls['sample-slider']}
				modules={[Navigation]}
				navigation
				spaceBetween={'50px 50px'}
				slidesPerView={changeSlidesPerView()}
			>
				{reviews.map((item, i) => (
					<div key={item.id + i} className={cn(cls.reviewWrapper)}>
						<SwiperSlide key={item.id}>
							<ReviewCard
								description={item.description}
								quotes={item.quotes}
								name={item.name}
								avatar={item.avatar}
							/>
						</SwiperSlide>
					</div>
				))}
			</Swiper>
			<div className={cls.recomendation}>
				<div className={cls.recomendTitle}>Нас рекомнедуют на</div>
				<a href={'https://vl.sutochno.ru/hotels/115924'}>
					<img
						className={cls.sutochno}
						width={200}
						height='auto'
						src={Sutochno}
						alt='Суточно.ру'
						title='Суточно.ру'
						loading='lazy'
					/>
				</a>
			</div>
		</section>
	);
});
