import '@/styles/globals.css'
import { Orbis, OrbisProvider } from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";
import Script from 'next/script'

/** Set the global forum context here. You can create your context here: https://useorbis.com/dashboard */
global.orbis_context = "kjzl6cwe1jw14ae56dcglgwsify260a9je6ml9x7dut8gdlrm3j1105dyjfhg9u";
global.orbis_chat_context = "kjzl6cwe1jw14ae56dcglgwsify260a9je6ml9x7dut8gdlrm3j1105dyjfhg9u";

let orbis = new Orbis({
  useLit: true,
  node: "https://node2.orbis.club"
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8QVH2K5MJP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8QVH2K5MJP');
        `}
      </Script>
      <OrbisProvider defaultOrbis={orbis}><Component {...pageProps} /></OrbisProvider>
    </>
  );
}
