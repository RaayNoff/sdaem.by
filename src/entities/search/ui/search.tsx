import clsx from "clsx";
import { FC } from "react";
import { SVG, svgSelector } from "shared/components";

import s from "./style.module.scss";

interface ISearchProps {
	className: string;
}

const Search: FC<ISearchProps> = ({ className }) => {
	return (
		<form className={clsx(s.search, className)}>
			<input
				type="text"
				className={s.search__input}
				placeholder="Поиск по статьям"
			/>
			<button className={s.search__button} type="button" aria-label="Search">
				{svgSelector(SVG.LOUPE)}
			</button>
		</form>
	);
};

export default Search;
