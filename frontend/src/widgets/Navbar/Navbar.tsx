import cn from 'classnames';
import cls from './Navbar.module.scss';

export function Navbar() {
    return (
		<div className={cn(cls.Navbar)}>
			<div className={cn(cls.wrapper)}>
				<div className={cn(cls.left)}>
					<a className={cn(cls.link)} href='#about'>
						Об Отеле
					</a>
					<a className={cn(cls.link)} href='#rooms'>
						Номера
					</a>
					<a className={cn(cls.link)} href='#reviews'>
						Отзывы
					</a>
				</div>

				<div className={cn(cls.right)}>
					<div className={cn(cls.address)}>
						г. Владивосток, <br /> ул. Уборевича 17
					</div>
					<a className={cn(cls.link)} href='tel:+79025209861'>
						+7(902)520 98 61
					</a>
					<button>Забронировать</button>
				</div>
			</div>
		</div>
	);
}
