import { useRouter } from "next/router";
import { useEffect } from "react";
import { General } from "shared/types";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push(General.Route.NEWS);
	}, []);

	return <></>;
}
