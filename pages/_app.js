import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import { StateContext } from "@/context/StateContext";

const work_sans = Work_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <main className={`${work_sans.className}`}>
        <Component {...pageProps} />
      </main>
    </StateContext>
  );
}
