import {Work_Sans} from 'next/font/google';

const work_sans = Work_Sans({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
  <main className={work_sans.className}>
    <Component {...pageProps} />
  </main>
  );
}
