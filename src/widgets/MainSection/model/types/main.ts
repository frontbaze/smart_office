import main1 from '../../../../shared/assets/images/main1.jpg';
import main2 from '../../../../shared/assets/images/main2.jpg';
import main3 from '../../../../shared/assets/images/main3.jpg';

export interface MainSlide {
	id: number;
	src: string;
}

export const mainSlide: MainSlide = { id: 5, src: main1 };
