import cn from 'classnames';
import cls from './AboutSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { blocks } from '../model/about';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

export const AboutSection = () => {
	return (
		<div id='about' className={cls.AboutSection}>
			<div className={cls.wrapper}>
				<div className={cls.left}>
					<div className={cls.title}>Об отеле</div>
					<div className={cls.address}>
						г. Владивосток, ул. Уборевича 17, <br /> смарт отель "Smart Office" <br /> +7 (902) 520 98 61
					</div>
				</div>
				<div className={cls.right}>
					<div className={cls.description}>
						Если вы планируете провести время в городе Владивосток, наш Smart Hotel отлично подойдёт для
						вас.
					</div>
					<div className={cls.description}>
						Мы предлагаем уютные номера в самом центре города. С нашем отелем вы сможете почувствовать себя
						как дома.
					</div>
				</div>
			</div>

			<Swiper
				modules={[Pagination, Autoplay]}
				pagination={{
					dynamicBullets: true,
				}}
				autoplay
				loop
				spaceBetween={'50px 50px'}
				slidesPerView={1}
			>
				{blocks.map((item) => (
					<SwiperSlide key={item.id} data-swiper-autoplay='10000'>
						<div className={cls.blockItem}>
							<div className={cls.titleItem}>{item.title}</div>
							<div className={cls.textItem}>{item.text}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
