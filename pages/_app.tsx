import Script from "next/script"
import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Roboto } from "@next/font/google"
import Layout from "../components/Layout"
import { StateContext } from "../config/context"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TYS3F0R31Z" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TYS3F0R31Z');
        `}
      </Script>
      <div className={roboto.className}>
        <StateContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </div>
    </>
  )
}
