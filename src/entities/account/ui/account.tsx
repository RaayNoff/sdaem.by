import { FC } from "react";
import Image from "next/image";
import { SVG, svgSelector } from "shared/components";

import s from "./style.module.scss";

const Account: FC = () => {
	return (
		<button className={s.account} aria-label="Open account">
			<Image
				src="/assets/images/general/avatar_test.jpg"
				alt="Picture of the profile"
				width={30}
				height={30}
				className={s.account__picture}
			/>
			<p className={s.account__name}>Dmitry</p>
			{svgSelector(SVG.ACCOUNT_CHEVRON)}
		</button>
	);
};

export default Account;
