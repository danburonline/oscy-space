import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'

function OscySPA({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default OscySPA
