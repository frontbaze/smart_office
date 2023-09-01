import photo1 from '../../../../shared/assets/images/photo-4.jpg';
import photo2 from '../../../../shared/assets/images/photo-5.jpg';
import photo3 from '../../../../shared/assets/images/photo-6.jpg';

export interface MainSlides {
	slides: string[];
}

export const mainSlides: MainSlides = {
	slides: [photo1, photo2, photo3],
};
