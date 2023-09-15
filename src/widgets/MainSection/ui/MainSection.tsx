import cn from 'classnames';
import cls from './MainSection.module.scss';
import { mainSlides } from '../model/types/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-fade';

export function MainSection() {
	return (
		<div className={cn(cls.MainSection)}>
			<Swiper
				modules={[Autoplay, EffectFade]}
				autoplay
				speed={3000}
				loop
				effect='fade'
				spaceBetween={'50px 50px'}
				slidesPerView={1}
			>
				{mainSlides.slides.map((slide, i) => (
					<SwiperSlide>
						<img className={cls.mainImg} key={slide + i} src={slide} alt='Фото номеров' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
