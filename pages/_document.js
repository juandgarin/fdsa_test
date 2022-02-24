import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}