import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { General } from "shared/types";
import { SVG, svgSelector } from "shared/components";

import s from "./index.module.scss";

const payments = [
	"/assets/images/icons/payment/visa.png",
	"/assets/images/icons/payment/webpay.png",
	"/assets/images/icons/payment/visa_verified.png",
	"/assets/images/icons/payment/mastercard.png",
	"/assets/images/icons/payment/mastercard_secure.png",
	"/assets/images/icons/payment/belcard.png",
];
const socials = [
	{ svg: SVG.INST, link: "#" },
	{ svg: SVG.VK, link: "#" },
	{ svg: SVG.FACEBOOK, link: "#" },
];

const Footer: FC = () => {
	return (
		<footer className={s.footer}>
			<div className="footer-container">
				<div className={s.footer__container}>
					<section className={`${s.footer__left} ${s.left}`}>
						<Image
							className={s.left__logo}
							src="/assets/images/general/logo.png"
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
								<Link href={General.Route.NEWS} className="text">
									Новости
								</Link>
								<Link href={General.Route.TARIFF} className="text">
									Размещение и&nbsp;тарифы
								</Link>
								<Link href={General.Route.ADS} className="text">
									Объявления на&nbsp;карте
								</Link>
								<Link href={General.Route.CONTACTS} className="text">
									Контакты
								</Link>
							</li>
						</ul>
						<section className={s.right__bottom}>
							<div className={s.socials}>
								<p className={s.socials__text}>Мы&nbsp;в&nbsp;соцсетях</p>
								{socials.map((s, i) => (
									<Link key={i} href={s.link}>
										{svgSelector(s.svg)}
									</Link>
								))}
							</div>
							<div className={s.payment}>
								{payments.map((p, i) => (
									<Image key={i} alt="Payment" src={p} width={86} height={30} />
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
