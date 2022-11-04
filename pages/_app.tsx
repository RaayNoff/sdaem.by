import "../styles/globals.scss";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
