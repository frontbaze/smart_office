import cn from 'classnames';
import cls from './MainSection.module.scss';
import { mainSlide } from '../model/types/main';
import { memo } from 'react';

export const MainSection = memo(() => {
	return (
		<main className={cn(cls.MainSection)}>
			<h1 className={cls['visually-hidden']}>Smart Office Hotel - смарт-отель в центре Владивостока</h1>
			<img
				width="100%"
				height="100%"	
				className={cls.mainImg}
				src={mainSlide.src}
				alt='Фото номеров'
				title='Фотография отеля'
				loading='eager'
			/>
		</main>
	);
});
