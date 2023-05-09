import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/icons/icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/images/icons/icon-96x96.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href="/images/icons/icon-128x128.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/icons/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icons/icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/images/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/images/icons/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/images/icons/icon-512x512.png"
          />
          <meta
            name="msapplication-TileImage"
            content="/images/icons/icon-144x144.png"
          ></meta>
          <meta name="theme-color" content="#365314" />
          <title>Splendor</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
