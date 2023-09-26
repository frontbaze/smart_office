import cn from 'classnames';
import cls from './MainSection.module.scss';
import { mainSlides } from '../model/types/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { memo } from 'react';
import 'swiper/scss';
import 'swiper/scss/effect-fade';

export const MainSection = memo(() => {
	return (
		<main className={cn(cls.MainSection)}>
			<h1 className={cls['visually-hidden']}>Smart Office Hotel - смарт-отель в центре Владивостока</h1>
			<Swiper
				modules={[Autoplay, EffectFade]}
				autoplay
				speed={3000}
				loop
				effect='fade'
				spaceBetween={'50px 50px'}
				slidesPerView={1}
			>
				{mainSlides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<img className={cls.mainImg} src={slide.src} alt='Фото номеров' />
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	);
});
