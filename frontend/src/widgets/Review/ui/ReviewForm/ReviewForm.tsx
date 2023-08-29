import cn from 'classnames';
import cls from './ReviewForm.module.scss';
import { Rating } from '../../../../shared/ui/Rating/Rating';
import CloseIcon from '../../../../shared/assets/icons/close.svg';

interface ReviewProps {
	rating: number;
	setRating: (rating: number) => void;
	userId?: string;
}

export function ReviewForm(props: ReviewProps) {
	const { rating, setRating } = props;
	return (
		<>
			<div className={cn(cls.ReviewForm)}>
				<input type='text' placeholder='Имя' />
				<input className={cls.title} type='text' placeholder='Заголовок отзыва' />
				<div className={cls.rating}>
					<span>Оценка:</span>
					<Rating rating={rating} setRating={setRating} isEditable />
				</div>

				<textarea className={cls.content} placeholder='Текст отзыва'></textarea>
				<div className={cls.submit}>
					<button>Отправить</button>
					<span className={cls.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			<div className={cls.success}>
				<div className={cls.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки</div>
				<CloseIcon className={cls.close} />
			</div>
		</>
	);
}
