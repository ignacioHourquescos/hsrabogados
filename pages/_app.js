import '../styles/globals.css'
import Layout from '../components/UI/BurgerMenu/Layout'
import LanguageSwitch   from '../components/LanguageSwitch/LanguageSwitch'
import TopColorBar from '../components/UI/TopColorBar/TopColorBar'
import NavBar from '../components/UI/NavBar/NavBar'
import { AppProvider } from '../Context/UseAppContext'
function MyApp({ Component, pageProps }) {
   
  return         (
  <AppProvider>
        <Layout/>	
        <NavBar/>
        <LanguageSwitch />
        <TopColorBar/>
  <Component {...pageProps} />        
  </AppProvider>)
}

export default MyApp
