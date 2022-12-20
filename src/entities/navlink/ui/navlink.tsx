import Link from "next/link";
import { FC } from "react";
import { SVG, svgSelector } from "shared/components";
import { useActiveLink } from "shared/hooks";

import s from "./style.module.scss";

interface INavlinkProps {
	href: string;
	text: string;
	marker: boolean;
}

const Navlink: FC<INavlinkProps> = ({ href, marker, text }) => {
	const linkRef = useActiveLink(href, s.active);

	return (
		<Link href={href} className={s.navlink} ref={linkRef}>
			{marker && svgSelector(SVG.MARKER_BLACK)}
			<span className={s.navlink__text}>{text}</span>
		</Link>
	);
};

export default Navlink;
