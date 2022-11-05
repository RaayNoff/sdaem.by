import { FC } from "react";
import Image from "next/image";
import profilePic from "../../assets/images/avatar_test.jpg";
import s from "../../styles/components/ui/Account.module.scss";
import SVGSelector, { localSVG } from "../../tools/SVGSelector";

interface IAccountProps {}

const Account: FC = ({}) => {
  return (
    <button className={s.account} aria-label="Open account">
      <Image
        src={profilePic}
        alt="Picture of the profile"
        width={30}
        height={30}
        className={s.account__picture}
      />
      <p className={s.account__name}>Dmitry</p>
      {SVGSelector(localSVG.ACCOUNT_CHEVRON)}
    </button>
  );
};

export default Account;
