import cn from 'classnames';
import cls from './Footer.module.scss';

export const Footer = () => {
	return (
		<div className={cls.Footer}>
			<div className={cls.footerWrapper}>
				<div className={cls.address}>
					Адрес: <br />{' '}
					<span>
						г. Владивосток, <br /> ул. Уборевича 17
					</span>
				</div>
				<div className={cls.contacts}>
					Телефоны: <br />
					<a className={cn(cls.link)} href='tel:+79025209861'>
						+7 (902) 520 98 61
					</a>
				</div>
				<div className={cls.email}>
					Электронная почта: <br /> <span>lorem@mail.ru</span>
				</div>
			</div>
			<div className={cls.copyright}>©2023 Smart Office | Все права защищены</div>
		</div>
	);
};
