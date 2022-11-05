import { FC } from "react";
import s from "../../styles/components/ui/SubButton.module.scss";
import SVGSelector, { localSVG } from "../../tools/SVGSelector";

interface ISubButtonProps {
  text: string;
  isMarker?: boolean;
  callback?: () => void;
}

const SubButton: FC<ISubButtonProps> = ({
  isMarker = false,
  text,
  callback,
}) => {
  const clickHandler = () => {
    if (callback) callback();
  };

  return (
    <button className={s.subButton} onClick={() => clickHandler()}>
      <span className={s.subButton__text}>{text}</span>
      {isMarker && SVGSelector(localSVG.MARKER_ORANGE)}
    </button>
  );
};

export default SubButton;
