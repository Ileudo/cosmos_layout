import '@/styles/reset.scss';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { moveX, neueMachina, ttOctosquares, mazzardH } from '../../public/fonts/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${moveX.variable} ${neueMachina.variable} ${ttOctosquares.variable} ${mazzardH.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
