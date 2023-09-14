import cn from 'classnames';
import cls from './Navbar.module.scss';
import { Link } from 'react-scroll';
import { useCallback, useEffect, useState } from 'react';

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

	const openHandler = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
		console.log(isOpen);
	};

	const changeMenu = useCallback(() => {
		if (clientWidth <= 905) {
			return true;
		} else {
			return false;
		}
	}, [clientWidth]);
	useEffect(() => {
		const handleResize = () => {
			setClientWidth(document.documentElement.clientWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className={cn(cls.Navbar)}>
			<div className={cn(cls.wrapper)}>
				{changeMenu() && isOpen ? (
					<div className={cn(cls.menu)}>
						<Link onClick={openHandler} className={cn(cls.menulink)} to='about' smooth={true} offset={20}>
							Об Отеле
						</Link>
						<Link onClick={openHandler} className={cn(cls.menulink)} to='rooms' smooth={true} offset={20}>
							Номера
						</Link>
						<Link onClick={openHandler} className={cn(cls.menulink)} to='reviews' smooth={true} offset={20}>
							Отзывы
						</Link>
						<div className={cn(cls.menuAddress)}>
							<Link onClick={openHandler} className={cls.menuMapLink} to='map' smooth={true} offset={20}>
								Смарт-отель "Smart Office" <br /> г. Владивосток, <br /> ул. Уборевича 17
							</Link>
						</div>
						<div>
							<a onClick={openHandler} className={cn(cls.menulink)} href='https://wa.me/+79025209861'>
								+7 (902) 520 98 61 <br /> (Whatsapp)
							</a>
						</div>
						<a onClick={openHandler} href='tel:+79147249874' className={cls.menuNavBtn}>
							Забронировать
						</a>
					</div>
				) : null}
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
							Смарт-отель "Smart Office" <br /> г. Владивосток, ул. Уборевича 17
						</Link>
					</div>
					<div>
						<a className={cn(cls.link)} href='https://wa.me/+79025209861'>
							+7 (902) 520 98 61 <br /> <span>(Whatsapp)</span>
						</a>
					</div>
					<a href='tel:+79147249874' className={cls.navBtn}>
						Забронировать
					</a>
				</div>
				<div onClick={openHandler} className={cls.hamburger}>
					<span className={cls['hamburger__line']}></span>
					<span className={cls['hamburger__line']}></span>
					<span className={cls['hamburger__line']}></span>
				</div>
			</div>
		</div>
	);
}
