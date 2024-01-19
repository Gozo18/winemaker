import Script from "next/script"
import Head from "next/head"
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
  function addSchemaJsonLd() {
    return {
      __html: `
      {"@context": "https://schema.org",
      "@type": "OnlineStore",
      "name": "WineMaker beta - vinařův deník",
      "description": "WineMaker beta - vinařův deník, aplikace pro evidenci vín a vinohradů",
      "image": "http://winemaker.cz/winemakerfb.jpg",
      "logo": "http://winemaker.cz/winemaker.webp",
      "parentOrganization": {
        "@type": "OnlineBusiness",
        "name": "Winemaker beta",
        "url": "http://winemaker.cz/"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Czech Republic",
        "addressLocality": "Pavlov"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingCount": 20,
        "ratingValue": 4.9
      },
      "foundingDate": "2023-10-10"
    }`,
    }
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addSchemaJsonLd()}
          key="product-jsonld"
        />
      </Head>
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
