import { FC } from "react";
import { SVG, svgSelector } from "shared/components";

import s from "./style.module.scss";

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
			{isMarker && svgSelector(SVG.MARKER_ORANGE)}
		</button>
	);
};

export default SubButton;
