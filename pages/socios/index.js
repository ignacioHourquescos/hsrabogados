import ss from './index.module.scss'
import Head from 'next/head'
import Profile from '../../components/UI/Profile/Profile'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import Footer from '../../components/Footer/Footer'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import useAppContext from "../../Context/UseAppContext";
import ContactPeek from '../../components/ContactPeek/ContactPeek'

const Block = () => {
   const { lang } = useAppContext();
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

         <HeaderSub titulo={lang=="ESP"?"SOCIOS DEL ESTUDIO":"PARTNERS"} img="ofi7.jpeg" />

			<div className={ss.container}>
            {partners.map((element) =>(
               <>
               <Profile key={element.name} name={element.name} img={element.img} lastname={element.lastname} bio={lang=="ESP"?element.bio:element.bioIngles} />
               </>
            ))}
         


            
			</div>
         <ContactPeek/>
         <Footer/>
		</>
	);
};



const partners = [
   {
      
      name: "MANFRED",
      lastname:"HANG KUCHEN",
      bio:"Abogado graduado de la Universidad Católica Argentina (UCA), cuenta con una Maestría en Derecho Empresario de la Universidad de San Andrés (UdeSA) y un Posgrado en Asesoramiento Jurídico de Empresas de la Universidad Católica Argentina ...",
      bioIngles:"Manfred is a lawyer graduated from the Universidad Católica Argentina (UCA), has a Master's Degree in Business Law from the University of San Andrés (UdeSA) and a Postgraduate Degree in Business Legal Advice from ... ",
      img:"/MHK.png"
   },
   {
      name: "GUILLERMO",
      lastname:"SPORLEDER",
      bio:"Abogado egresado de la Universidad de Buenos Aires (UBA), cuenta con un Posgrado de Especialización en Derecho Laboral y Relaciones Internacionales del Trabajo de la Universidad Católica Argentina (UCA) y una Maestría en Derecho ... ",
      bioIngles:"Guillermo is a lawyer graduated from the University of Buenos Aires (UBA), has a Postgraduate Specialization in Labor Law and International Labor Relations from the Argentine Catholic University (UCA) and a  ... ",
      
      img:"/GS.png"
   },
   {
      name: "SEBASTIAN",
      lastname:"RODRIGUEZ MORALES",
      bio:"Abogado graduado de la Universidad del Salvador (USAL), cuenta con una Maestría en Derecho Empresario de la Universidad de San Andrés (UdeSA) y un Posgrado de Economía y Financias de la Universidad Pompeau Fabra (Barcelona, España)...",
      bioIngles:"Sebastián is a lawyer graduated from the Universidad del Salvador (USAL), has a Master's Degree in Business Law from the University of San Andrés (UdeSA) and a Postgraduate Degree in Economics and Finance from the Pompeu... ",
      img:"/SRM.png"
   },

]

export default Block;