import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Oscy Space is an experimental and immersive spatial audio proof of concept implemented with React-Three-Fiber, where people can explore two interesting nature scenes from Switzerland.'
          />
          <link as='font' rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=optional'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
