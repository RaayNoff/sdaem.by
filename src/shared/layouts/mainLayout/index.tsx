import Head from "next/head";
import { FC } from "react";

interface ILayoutProps {
	children?: React.ReactNode;
	title?: string;
	selfClassName?: string;
}

const MainLayout: FC<ILayoutProps> = ({
	title = "SDAEM.BY | News",
	children,
	selfClassName,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={selfClassName}>{children}</main>
		</>
	);
};
export default MainLayout;
