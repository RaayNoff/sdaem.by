import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import s from "./style.module.scss";

interface IBookmarksProps {
	className?: string;
}

const Bookmarks: FC<IBookmarksProps> = ({ className }) => {
	return (
		<Link href={"#"} className={clsx(s.bookmarks, className)}>
			<span className={s.bookmarks__text}>Закладки</span>
			<span className={s.bookmarks__icon}>
				<AiOutlineHeart />
			</span>
		</Link>
	);
};

export default Bookmarks;
