import Head from "next/head";
import { FC } from "react";
import clsx from "clsx";

import s from "../../styles/components/layouts/RegistrationLayout.module.scss";

import { IMainLayoutProps } from "./MainLayout.component";

type IRegistrationLayoutProps = IMainLayoutProps

const RegistrationLayout: FC<IRegistrationLayoutProps> = ({
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

export default RegistrationLayout;
