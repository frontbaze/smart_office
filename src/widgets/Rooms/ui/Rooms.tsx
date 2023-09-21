import cn from 'classnames';
import cls from './Rooms.module.scss';
import { RoomCard } from './RoomCard';
import { rooms } from '../model/types/rooms';

export function Rooms() {
	return (
		<div className={cls.roomWrapper}>
			<div className={cn(cls.Rooms)}>
				<div className={cls.titleWrapper}>
					<h2 className={cls.title}>Наши номера</h2>
					<h3 className={cls.description}>
						Мы предлагаем вам два типа номеров, все номера имеют персональный сан-узел, кондиционер и быстрый wi-fi
					</h3>
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
