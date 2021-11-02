
import Header from '../components/Header/Header'
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch'
import About from '../components/About/About'
import Referals from '../components/Referals/Referals'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'
import ContactPeek from '../components/ContactPeek/ContactPeek';
import { createClient } from 'contentful'


export async function getStaticProps() {

	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	})
	const res = await client.getEntries({ content_type: 'noticia' })
 

	return {
		props: {
			noticias: res.items,
         revalidate:10
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
