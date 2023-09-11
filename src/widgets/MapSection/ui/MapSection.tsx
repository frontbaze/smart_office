import cn from 'classnames';
import cls from './MapSection.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function MapSection() {
	const defaultState = {
		center: [43.118479, 131.890634],
		zoom: 18,
	};
	return (
		<div id='map'>
			<div className={cn(cls.MapSection)}>
				<div className={cls.title}>Вы сможете легко найти нас</div>

				<YMaps>
					<Map width={'100%'} height={500} defaultState={defaultState}>
						<Placemark geometry={[43.118479, 131.890634]} />
					</Map>
				</YMaps>
			</div>
		</div>
	);
}
