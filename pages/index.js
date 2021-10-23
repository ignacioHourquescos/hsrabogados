import Enconstruccion from '../components/enconstruccion/enconstruccion'
import Header from '../components/Header/Header'
import BurgerMenu from '../components/UI/BurgerMenu/BurgerMenu'
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch'
import About from '../components/About/About'
import Referals from '../components/Referals/Referals'
import News from '../components/News/News'
import Clients from '../components/Clients/Clients'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Logos from '../components/Logos2/Logos'
import Layout from '../components/UI/BurgerMenu/BurgerMenu'
import SideBar from "../components/UI/BurgerMenu/BurgerMenu";
import ContactPeek from '../components/ContactPeek/ContactPeek';
// import useAppContext    from '../../Context/UseAppContext';
import { createClient } from 'contentful'


export async function getStaticProps() {

	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	})
	const res = await client.getEntries({ content_type: 'noticia' })
 

	return {
		props: {
			noticias: res.items
		}
	}
}
 
export default function Home({noticias}) {


	return (
		<>
			<Header />
			<LanguageSwitch />
			<About />
			<Referals/>
			<News noticias={noticias} />
			{/* <Clients /> */}
         {/* <Logos/> */}
			{/* <Contact /> */}
			<ContactPeek />
			<Footer />

		



		</>
	);
}
