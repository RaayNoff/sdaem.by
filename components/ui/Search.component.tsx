import { FC } from "react";
import s from "../../styles/components/ui/Search.module.scss";
import SVGSelector, { localSVG } from "../../tools/SVGSelector";

interface ISearchProps {
  className: string;
}

const Search: FC<ISearchProps> = ({ className }) => {
  return (
    <form className={`${s.search} ${className}`}>
      <input
        type="text"
        className={s.search__input}
        placeholder="Поиск по статьям"
      />
      <button className={s.search__button} type="button" aria-label="Search">
        {SVGSelector(localSVG.LOUPE)}
      </button>
    </form>
  );
};

export default Search;
