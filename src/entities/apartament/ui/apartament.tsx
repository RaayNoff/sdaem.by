import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import s from "./style.module.scss";

interface IApartamentProps {
	id: number;
	src: any;
	title: string;
	desc: string;
	date: string;
}

const Apartament: FC<IApartamentProps> = ({ src, title, desc, date, id }) => {
	return (
		<article className={s.apart}>
			<Image
				alt="Apartament picture"
				src={src}
				className={s.apart__picture}
				width={406}
				height={226}
				priority={true}
			/>
			<div className={s.apart__wrapper}>
				<header className={s.apart__title}>{title}</header>
				<p className={s.apart__desc}>{desc}</p>
				<footer className={`${s.apart__footer} ${s.footer}`}>
					<span className={s.footer__date}>{date}</span>
					<Link href="#" className={s.footer__link}>
						Читать
					</Link>
				</footer>
			</div>
		</article>
	);
};

export default Apartament;
