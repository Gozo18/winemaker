import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="cs">
      <Head>
        <meta
          name="description"
          content="WineMaker beta - vinařův deník, aplikace pro evidenci vín a vinohradů"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.winemaker.cz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WineMaker beta - vinařův deník" />
        <meta
          property="og:description"
          content="WineMaker beta - vinařův deník, aplikace pro evidenci vín a vinohradů"
        />
        <meta
          property="og:image"
          content="https://www.winemaker.cz/winemakerfb.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
