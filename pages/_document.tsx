import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property="og:image"
          content="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          sizes="48x48"
          href="/favicon.ico"
        />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
