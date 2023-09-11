import cn from 'classnames';
import cls from './Rating.module.scss';
import { useState } from 'react';
import StarIcon from './star.svg';
import { useEffect } from 'react';

interface RatingProps {
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}

export function Rating(props: RatingProps) {
	const { isEditable = false, rating, setRating } = props;
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(cls.star, {
						[cls.filled]: i < currentRating,
						[cls.editable]: isEditable,
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon />
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
}
