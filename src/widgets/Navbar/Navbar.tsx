import cn from 'classnames';
import cls from './Navbar.module.scss';
import { Link } from 'react-scroll';

export function Navbar() {
    return (
		<div className={cn(cls.Navbar)}>
			<div className={cn(cls.wrapper)}>
				<div className={cn(cls.left)}>
					<Link className={cn(cls.link)} to='about' smooth={true} offset={20}>
						Об Отеле
					</Link>
					<Link className={cn(cls.link)} to='rooms' smooth={true} offset={20}>
						Номера
					</Link>
					<Link className={cn(cls.link)} to='reviews' smooth={true} offset={20}>
						Отзывы
					</Link>
				</div>

				<div className={cn(cls.right)}>
					<div className={cn(cls.address)}>
						<Link className={cls.mapLink} to='map' smooth={true} offset={20}>
							г. Владивосток, <br /> ул. Уборевича 17
						</Link>
					</div>
					<a className={cn(cls.link)} href='tel:+79025209861'>
						+7 (902) 520 98 61
					</a>
					<button className={cls.navBtn}>Забронировать</button>
				</div>
			</div>
		</div>
	);
}
