import cn from 'classnames';
import cls from './MapSection.module.scss';
import { Map } from '../../../shared/ui/Map/Map';

export function MapSection() {
	return (
		<div id='map'>
			<div className={cn(cls.MapSection)}>
			<div className={cls.title}>Вы сможете легко найти нас</div>
				<Map />
			</div>
		</div>
	);
}
