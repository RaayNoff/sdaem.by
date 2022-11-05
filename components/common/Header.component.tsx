import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { Routes } from "../../models/enums/Routes";
import s from "../../styles/components/common/Header.module.scss";
import Account from "../ui/Account.component";
import Bookmarks from "../ui/Bookmarks.component";
import Navlink from "../ui/Navlink.component";
import logo from "../../assets/images/Logo.png";
import SubButton from "../ui/SubButton.component";

const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <header className={s.header}>
      <div className={`${s.header__main} ${s.main}`}>
        <div className="container">
          <div className={s.main__container}>
            <nav className={s.main__navigation}>
              <Navlink href={Routes.HOME} marker={false} text="Главная" />
              <Navlink href={Routes.NEWS} marker={false} text="Новости" />
              <Navlink
                href={Routes.TARIFF}
                marker={false}
                text="Размещение и тарифы"
              />
              <Navlink
                href={Routes.ADS}
                marker={true}
                text="Объявления на карте"
              />
              <Navlink href={Routes.CONTACTS} marker={false} text="Контакты" />
            </nav>
            <section className={`${s.main__controls} ${s.controls}`}>
              <Bookmarks className={s.controls__bookmarks} />
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
              src={logo}
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
