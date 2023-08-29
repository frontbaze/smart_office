import cn from 'classnames';
import cls from './Rooms.module.scss';
import { RoomCard } from './RoomCard';
import { rooms } from '../model/types/rooms';

export function Rooms() {
	return (
		<div className={cn(cls.Rooms)}>
			{rooms.map((item) => (
                <RoomCard
                    key={item.id}
                    slides={item.slides}
                    title={item.title}
                    person={item.person}
                    price={item.price}
                    info={item.info}
                />
			))}
		</div>
	);
}
