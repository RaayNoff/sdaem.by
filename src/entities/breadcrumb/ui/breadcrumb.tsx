import { FC } from "react";
import { SVG, svgSelector } from "shared/components";

import s from "./style.module.scss";

interface IBreadcrumbProps {
	className?: string;
}

const Breadcrumb: FC<IBreadcrumbProps> = ({ className }) => {
	return (
		<section className={`${s.breadcrumb} ${className}`}>
			{svgSelector(SVG.BREADCRUMB_HOME)}
			{svgSelector(SVG.BREADCUMB_DOT)}
			<span className={s.breadcrumb__default}>Новости</span>
		</section>
	);
};

export default Breadcrumb;
