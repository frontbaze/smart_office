import cn from 'classnames';
import cls from './MapSection.module.scss';
import { Map } from '../../../shared/ui/Map/Map';

export function MapSection() {
	return (
		<div className={cn(cls.MapSection)}>
			<Map />
		</div>
	);
}
