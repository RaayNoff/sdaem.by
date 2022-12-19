import Link from "next/link";
import { FC, useRef } from "react";

import s from "../../styles/components/ui/Navlink.module.scss";
import { useActiveLinkRef } from "../../hooks/useActiveLinkRef";
import SVGSelector, { localSVG } from "../../tools/SVGSelector";

interface INavlinkProps {
  href: string;
  text: string;
  marker: boolean;
}

const Navlink: FC<INavlinkProps> = ({ href, marker, text }) => {
  const linkRef = useActiveLinkRef(href, s.active);

  return (
    <Link href={href} className={s.navlink} ref={linkRef}>
      {marker && SVGSelector(localSVG.MARKER_BLACK)}
      <span className={s.navlink__text}>{text}</span>
    </Link>
  );
};

export default Navlink;
