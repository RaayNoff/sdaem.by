import Head from "next/head";
import { FC } from "react";
import s from "../../styles/components/layouts/MainLayout.module.scss";
import Footer from "../common/Footer.component";
import Header from "../common/Header.component";

interface IMainLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const MainLayout: FC<IMainLayoutProps> = ({
  title = "SDAEM.BY | News",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
