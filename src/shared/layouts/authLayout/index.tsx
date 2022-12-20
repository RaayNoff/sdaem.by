import clsx from "clsx";
import Head from "next/head";
import { FC } from "react";

import s from "./style.module.scss";

interface ILayoutProps {
	children?: React.ReactNode;
	title?: string;
	selfClassName?: string;
}

const AuthLayout: FC<ILayoutProps> = ({
	children,
	title = "SDAEM.BY | Авторизация",
	selfClassName,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={clsx(selfClassName, s.layout)}>
				<div className={s.background}></div>
				<div className={s.background__image}> </div>
				<div className={s.formWrapper}>{children}</div>
			</main>
		</>
	);
};

export default AuthLayout;
