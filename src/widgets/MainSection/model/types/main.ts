import main1 from '../../../../shared/assets/images/main1.jpg';
import main2 from '../../../../shared/assets/images/main2.jpg';
import main3 from '../../../../shared/assets/images/main3.jpg';

export interface MainSlide {
	id: number;
	src: string;
}

export const mainSlides: MainSlide[] = [
	{ id: 5, src: main1 },
	{ id: 6, src: main2 },
	{ id: 7, src: main3 },
];
