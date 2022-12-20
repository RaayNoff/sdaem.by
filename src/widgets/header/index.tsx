import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import { BookmarksLink } from "entities/bookmarksLink";
import { SubButton } from "entities/subbutton";
import { Navlink } from "entities/navlink";
import { Account } from "entities/account";
import { General } from "shared/types";

import s from "./index.module.scss";

const Header: FC = () => {
	const [isAuth] = useState(true);

	return (
		<header className={s.header}>
			<div className={`${s.header__main} ${s.main}`}>
				<div className="container">
					<div className={s.main__container}>
						<nav className={s.main__navigation}>
							<Navlink href={General.Route.HOME} marker={false} text="Главная" />
							<Navlink href={General.Route.NEWS} marker={false} text="Новости" />
							<Navlink
								href={General.Route.TARIFF}
								marker={false}
								text="Размещение и тарифы"
							/>
							<Navlink
								href={General.Route.ADS}
								marker={true}
								text="Объявления на карте"
							/>
							<Navlink href={General.Route.CONTACTS} marker={false} text="Контакты" />
						</nav>
						<section className={`${s.main__controls} ${s.controls}`}>
							<BookmarksLink className={s.controls__bookmarks} />
							{isAuth ? (
								<Account />
							) : (
								<Link href="#" className={s.controls__auth}>
									Вход и регистрация
								</Link>
							)}
						</section>
					</div>
				</div>
			</div>
			<div className={`${s.header__sub} ${s.sub}`}>
				<div className="container">
					<div className={s.sub__container}>
						<Image
							alt="Company logo"
							src="/assets/images/general/Logo.png"
							width={134}
							height={19}
							className={s.sub__logo}
						/>
						<ul className={`${s.sub__categories} ${s.categories}`}>
							<li className={s.categories__item}>
								<SubButton text="Квартиры на&nbsp;сутки" isMarker={true} />
							</li>
							<li className={s.categories__item}>
								<SubButton text="Коттеджи и&nbsp;усадьбы" />
							</li>
							<li className={s.categories__item}>
								<SubButton text="Бани и&nbsp;Сауны" />
							</li>
							<li className={s.categories__item}>
								<SubButton text="Авто напрокат" />
							</li>
						</ul>
						<button className={s.sub__button}>+ Разместить объявление</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
