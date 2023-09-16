import cn from 'classnames';
import cls from './MapSection.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function MapSection() {
	const defaultState = {
		center: [43.118479, 131.890634],
		zoom: 18,
	};

	return (
		<div>
			<div className={cn(cls.MapSection)}>
				<div className={cls.title}>Вы сможете легко найти нас</div>
				<div className={cls.subtitle}>Отель расположен в центре города, недалеко от сквера Суханова</div>

				<YMaps>
					<Map className={cls.map}  defaultState={defaultState}>
						<Placemark geometry={[43.118479, 131.890634]} options={{ preset: 'islands#redDotIcon' }} />
					</Map>
				</YMaps>
			</div>
		</div>
	);
}
