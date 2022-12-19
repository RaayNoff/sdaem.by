import { FC } from "react";

import s from "../../styles/components/ui/Pages.module.scss";

interface IPagesProps {
  className: string;
}

const Pages: FC<IPagesProps> = ({ className }) => {
  return (
    <section className={`${s.pages} ${className}`}>
      <button className={`${s.pages__item} ${s.active}`}>1</button>
      <button className={s.pages__item}>2</button>
      <button className={s.pages__item}>3</button>
      <button className={s.pages__item}>4</button>
      <button className={s.pages__item}>5</button>
      <button className={s.pages__item}>6</button>
      <button className={s.pages__item}>7</button>
      <span className={s.pages__ellipsis}>...</span>
      <button className={s.pages__item}>11</button>
    </section>
  );
};

export default Pages;
