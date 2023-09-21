import cn from 'classnames';
import cls from './RoomCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

interface RoomCardProps {
	slides: string[];
	title: string;
	person: string;
	price: number;
	info: string[];
}

export function RoomCard(props: RoomCardProps) {
	const { slides, title, person, price, info } = props;
	return (
		<div className={cn(cls.RoomCard, cls['sample-slider'])}>
			<Swiper modules={[Navigation]} navigation loop spaceBetween={'50px 50px'} slidesPerView={1}>
				{slides.map((slide) => (
					<SwiperSlide key={slide} className={cls['sample-slider-active']}>
						<img className={cls.roomImg} src={slide} alt='Фото номеров' />
					</SwiperSlide>
				))}
			</Swiper>

			<div className={cls.description}>
				<div className={cls.title}>{title}</div>
				<div className={cls.person}>{person}</div>
				<div className={cls.price}>{price} ₽</div>
				<div className={cls.info}>
					{info.map((item) => (
						<div key={item}>{item}</div>
					))}
				</div>
				<a href='tel:+79147249874' className={cls.roomBtn}>
					Забронировать
				</a>
			</div>
		</div>
	);
}
