import '../styles/globals.css'
import Layout           from '../components/BurgerMenu/Layout'
import LanguageSwitch   from '../components/LanguageSwitch/LanguageSwitch'
import TopColorBar      from '../components/UI/TopColorBar/TopColorBar'
import NavBar           from '../components/UI/NavBar/NavBar'
import { AppProvider }  from '../Context/UseAppContext'
import Head             from 'next/head'
function MyApp({ Component, pageProps }) {
   
  return         (
  <AppProvider>
    <Head>
     
        <link rel="icon" href="/faviconHSR.png" />
      </Head>
        <Layout/>	
        <NavBar/>
        <LanguageSwitch />
        <TopColorBar/>
  <Component {...pageProps} />        
  </AppProvider>)
}

export default MyApp
