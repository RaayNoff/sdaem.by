import { FC } from "react";

import s from "../../styles/components/buisness/Breadcrumb.module.scss";
import SVGSelector, { localSVG } from "../../tools/SVGSelector";

interface IBreadcrumbProps {
  className?: string;
}

const Breadcrumb: FC<IBreadcrumbProps> = ({ className }) => {
  return (
    <section className={`${s.breadcrumb} ${className}`}>
      {SVGSelector(localSVG.BREADCRUMB_HOME)}
      {SVGSelector(localSVG.BREADCUMB_DOT)}
      <span className={s.breadcrumb__default}>Новости</span>
    </section>
  );
};

export default Breadcrumb;
