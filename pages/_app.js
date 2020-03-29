import Head from 'next/head'
import { GlobalProvider } from '../utils/Context'
import GlobalStyle from '../utils/styles'
// import '../public/DejaVu_Sans_Bold/stylesheet.css'
import '../public/fonts/AlternateGothic/stylesheet.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Head>
        <title>Rafael Araujo</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
