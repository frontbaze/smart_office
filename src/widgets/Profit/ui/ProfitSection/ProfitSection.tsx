import cn from 'classnames';
import cls from './ProfitSection.module.scss';
import { profits } from '../../model/profit';
import Icon from '../../../../shared/ui/Icon/Icon';

export const ProfitSection = () => {
	return (
		<div className={cn(cls.ProfitSection)}>
			<div className={cls.title}>Удобства</div>
			<div className={cls.subtitle}>Мы хотим, чтобы каждый мог почувствовать себя свободным в нашем отеле</div>
			<div className={cls.wrapper}>
				{profits.map((item) => (
					<div key={item.id} className={cls.item}>
						<div className={cls.icon}>
							<Icon Svg={item.icon} />
						</div>
						<div className={cls.itemWrapper}>
							<div className={cls.itemTitle}>{item.title}</div>
							<div className={cls.itemDescription}>{item.subtitle}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};