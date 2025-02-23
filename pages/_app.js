import {Work_Sans} from 'next/font/google';
import GlobalStyle from '@/styles/GlobalStyles';

const work_sans = Work_Sans({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <main className={work_sans.className}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </main>
  );
}
