import { FC } from "react";

import RegistrationLayout from "../../components/layouts/RegistrationLayout.component";
import s from "../../styles/pages/Auth.module.scss";

const Authorization: FC = () => {
	return (
		<RegistrationLayout>
			<form className={s.auth}>
				<header className={s.auth__header}>Авторизация</header>
				<p className={s.auth__descr}>
					Авторизируйтесь, чтобы начать
					<br />
					публиковать свои объявления
				</p>
			</form>
		</RegistrationLayout>
	);
};

export default Authorization;
