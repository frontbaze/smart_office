import cn from 'classnames';
import cls from './Footer.module.scss';
import Icon from '../../../shared/ui/Icon/Icon';
import WhatsAppIcon from '../../../shared/assets/icons/whatsapp.svg';
import LocationIcon from '../../../shared/assets/icons/location.svg';
import TelIcon from '../../../shared/assets/icons/tel.svg';
import EmailIcon from '../../../shared/assets/icons/email.svg';

export const Footer = () => {
	return (
		<div className={cls.Footer}>
			<div className={cls.footerWrapper}>
				<div className={cls.address}>
					Адрес: <br />{' '}
					<div className={cls.locationWrapper}>
						<Icon Svg={LocationIcon} className={cls.location} />
						<span>
							Смарт-отель "Smart Office" <br /> г. Владивосток, ул. Уборевича 17
						</span>
					</div>
				</div>
				<div className={cls.contacts}>
					Контакты: <br />
					<div className={cls.contactsWrapper}>
						<a className={cn(cls.link, cls.whatsappWrapper)} href='https://wa.me/+79025209861'>
							<Icon Svg={WhatsAppIcon} className={cls.whatsapp} />
							+7 (902) 520 98 61 <br /> (Whatsapp)
						</a>

						<div className={cls.telWrapper}>
							<a className={cn(cls.link)} href='tel:+79025209861'>
								<Icon Svg={TelIcon} className={cls.telephone} />
								+7 (914) 724 98 74 <br /> (Бронирование)
							</a>
						</div>
					</div>
				</div>
				<div className={cls.mail}>
					Электронная почта: <br />
					<div className={cls.emailWrapper}>
						<a href='mailto:natkim2002@yandex.ru'>
							<Icon Svg={EmailIcon} className={cls.email} />
							natkim2002@yandex.ru
						</a>
					</div>
				</div>
			</div>
			<div className={cls.copyWrapper}>
				<div className={cls.copyright}>©2023 Smart Office | Все права защищены</div>
				<div className={cls.frontbaze}>
					Разработал:
					<a className={cls.frontbazeLink} href='https://wa.me/+79805149718'>frontbaze</a>
				</div>
			</div>
		</div>
	);
};
