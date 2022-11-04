import '../styles/globals.scss';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
