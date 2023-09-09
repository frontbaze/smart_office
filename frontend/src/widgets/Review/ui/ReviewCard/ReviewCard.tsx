import cn from 'classnames';
import cls from './ReviewCard.module.scss';

interface ReviewCardProps {
	name: string;
	avatar: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	description: string;
	quotes: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const ReviewCard = (props: ReviewCardProps) => {
    const { name, avatar, description, quotes } = props;
  return (
      <div className={cn(cls.ReviewCard)}>
          {/* <div>{quotes}</div> */}
          <div>{description}</div>
          {/* <div>{avatar}</div> */}
          <div>{name}</div>
      </div>
  )
}
