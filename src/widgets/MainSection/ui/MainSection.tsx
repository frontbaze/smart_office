import cn from 'classnames';
import cls from './MainSection.module.scss';
import { mainSlide } from '../model/types/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { memo } from 'react';
import 'swiper/scss';
import 'swiper/scss/effect-fade';

export const MainSection = memo(() => {
	return (
		<main className={cn(cls.MainSection)}>
			<h1 className={cls['visually-hidden']}>Smart Office Hotel - смарт-отель в центре Владивостока</h1>
			<img className={cls.mainImg} src={mainSlide.src} alt='Фото номеров' />
		</main>
	);
});
