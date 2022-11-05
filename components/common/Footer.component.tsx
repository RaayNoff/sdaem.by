import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "../../styles/components/common/Footer.module.scss";
import belcard from "../../assets/images/payment/belcard.png";
import mastercard from "../../assets/images/payment/mastercard.png";
import mastercardSecure from "../../assets/images/payment/mastercard-secure.png";
import visa from "../../assets/images/payment/visa.png";
import visaVerified from "../../assets/images/payment/visa-verified.png";
import webpay from "../../assets/images/payment/webpay.png";
import logo from "../../assets/images/Logo.png";
import SVGSelector, { localSVG } from "../../tools/SVGSelector";
import { Routes } from "../../models/enums/Routes";

const Footer: FC = () => {
  const payments = [
    visa,
    webpay,
    visaVerified,
    mastercard,
    mastercardSecure,
    belcard,
  ];
  const socials = [
    { svg: localSVG.INST, link: "#" },
    { svg: localSVG.VK, link: "#" },
    { svg: localSVG.FACEBOOK, link: "#" },
  ];

  return (
    <footer className={s.footer}>
      <div className="footer-container">
        <div className={s.footer__container}>
          <section className={`${s.footer__left} ${s.left}`}>
            <Image
              className={s.left__logo}
              src={logo}
              alt="Company logo"
              width={134}
              height={19}
            />
            <p className={s.left__sub}>СДАЁМ БАЙ</p>
            <small className={s.left__data}>
              ИП&nbsp;Шушкевич Андрей Викторович
              <br />
              УНП 192602485 Минским горисполкомом 10.02.2016
              <br />
              220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
              <br />
              +375 29&nbsp;621 48&nbsp;33, sdaem@sdaem.by
              <br />
              Режим работы: 08:00-22:00
            </small>
          </section>
          <section className={`${s.footer__right} ${s.right}`}>
            <ul className={`${s.right__top} ${s.list}`}>
              <li className={s.list__item}>
                <Link href="#" className="title">
                  Коттеджи и&nbsp;усадьбы
                </Link>
                <Link href="#" className="title">
                  Бани и&nbsp;сауны
                </Link>
                <Link href="#" className="title">
                  Авто на&nbsp;прокат
                </Link>
              </li>
              <li className={s.list__item}>
                <p className={`${s.list__title} title`}>Квартиры</p>
                <Link href="#" className="text">
                  Квартиры в&nbsp;Минске
                </Link>
                <Link href="#" className="text">
                  Квартиры в&nbsp;Гомеле
                </Link>
                <Link href="#" className="text">
                  Квартиры в&nbsp;Бресте
                </Link>
              </li>
              <li className={s.list__item}>
                <p className={`${s.list__title} title`}></p>
                <Link href="#" className="text">
                  Квартиры в&nbsp;Витебске
                </Link>
                <Link href="#" className="text">
                  Квартиры в&nbsp;Гродно
                </Link>
                <Link href="#" className="text">
                  Квартиры в&nbsp;Могилеве
                </Link>
              </li>
              <li className={s.list__item}>
                <Link href={Routes.NEWS} className="text">
                  Новости
                </Link>
                <Link href={Routes.NEWS} className="text">
                  Размещение и&nbsp;тарифы
                </Link>
                <Link href={Routes.NEWS} className="text">
                  Объявления на&nbsp;карте
                </Link>
                <Link href={Routes.NEWS} className="text">
                  Контакты
                </Link>
              </li>
            </ul>
            <section className={s.right__bottom}>
              <div className={s.socials}>
                <p className={s.socials__text}>Мы&nbsp;в&nbsp;соцсетях</p>
                {socials.map((s, i) => (
                  <Link key={i} href={s.link}>
                    {SVGSelector(s.svg)}
                  </Link>
                ))}
              </div>
              <div className={s.payment}>
                {payments.map((p, i) => (
                  <Image key={i} alt="Payment" src={p} />
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
