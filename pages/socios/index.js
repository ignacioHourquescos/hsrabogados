import ss from './index.module.scss'
import Head from 'next/head'
import Profile from '../../components/UI/Profile/Profile'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import Footer from '../../components/Footer/Footer'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Block = () => {
	return (
		<>
			<Head>
				<title>HSR - Socios</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Socios" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

         <HeaderSub titulo="SOCIOS DEL ESTUDIO" img="ofi2.jpg" />

			<div className={ss.container}>
            {partners.map((element) =>(
               <>
               <Profile key={element.name} name={element.name} lastname={element.lastname} bio={element.bio} />
               </>
            ))}
         


            
			</div>
         <Footer/>
		</>
	);
};



const partners = [
   {
      name: "MANFRED",
      lastname:"HANG KUCHEN",
      bio:"Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed aliienim explicari. Primis ridens insolens ne est, ei facer volumusforensibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis,pro iudico regione prodesset cu...",
      img:".Partner1.png"
   },
   {
      name: "GUILLERMO",
      lastname:"SPORDELER",
      bio:"Lorem ipsum dolor sit amet, prerterteto ex modo veniam complectitur, ad sed aliienim explicari. Primis ridens insolens ne est, ei facer volumusforensibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis,pro iudico regione prodesset cu...",
      img:".Partner1.png"
   },
   {
      name: "SEBASTIAN",
      lastname:"RODRIGUEZ MORALES",
      bio:"Lorem ipsum dolor sit amet, prerterteto ex modo veniam complectitur, ad sed aliienim explicari. Primis ridens insolens ne est, ei facer volumusforensibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis,pro iudico regione prodesset cu...",
      img:".Partner1.png"
   },

]

export default Block;