import Head from "next/head";
import { FC } from "react";
import s from "../../styles/components/layouts/MainLayout.module.scss";
import Footer from "../common/Footer.component";
import Header from "../common/Header.component";

interface IMainLayoutProps {
  children?: React.ReactNode;
  title?: string;
  selfClassName?: string;
}

const MainLayout: FC<IMainLayoutProps> = ({
  title = "SDAEM.BY | News",
  children,
  selfClassName,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={selfClassName}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
