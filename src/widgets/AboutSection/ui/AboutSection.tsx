import cn from 'classnames';
import cls from './AboutSection.module.scss';


export const AboutSection = () => {
    return (
		<div id='about' className={cls.AboutSection}>
			<div className={cls.left}>
				<div className={cls.title}>Об отеле</div>
				<div className={cls.address}>
					г. Владивосток, ул. Уборевича 17, <br /> смарт отель "Smart Office" <br />  +7 (902) 520 98 61
				</div>
			</div>
			<div className={cls.right}>
				<div className={cls.description}>
					Если вы планируете провести время в городе Владивосток, наш Smart Hotel отлично подойдёт для вас.
				</div>
				<div className={cls.description}>
					Мы предлагаем уютные номера в самом центре города. С нашем отелем вы сможете почувствовать себя как
					дома.
				</div>
			</div>
		</div>
	);
};
