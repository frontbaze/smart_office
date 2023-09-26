import cn from 'classnames';
import cls from './ProfitSection.module.scss';
import { profits } from '../../model/profit';
import Icon from '../../../../shared/ui/Icon/Icon';
import { memo } from 'react';

export const ProfitSection = memo(() => {
	return (
		<section className={cn(cls.ProfitSection)}>
			<h2 className={cls.title}>Удобства</h2>
			<h3 className={cls.subtitle}>Мы хотим, чтобы каждый мог почувствовать себя свободным в нашем отеле</h3>
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
		</section>
	);
});
