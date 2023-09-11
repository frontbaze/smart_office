import cn from 'classnames';
import cls from './Rooms.module.scss';
import { RoomCard } from './RoomCard';
import { rooms } from '../model/types/rooms';

export function Rooms() {
	return (
		<div id='rooms' className={cls.roomWrapper}>
			<div className={cn(cls.Rooms)}>
				<div className={cls.titleWrapper}>
					<div className={cls.title}>Наши номера</div>
					<div className={cls.description}>
						Мы предлагаем вам два типа номеров, все номера оборудованыдушевыми кабинами и wi-fi
					</div>
				</div>
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
		</div>
	);
}
