import s from './index.module.scss'
import Head from 'next/head'
import Profile from '../../components/UI/Profile/Profile'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import Footer from '../../components/Footer/Footer'
import ContactPeek from '../../components/ContactPeek/ContactPeek'
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import Button from "../../components/UI/Button/Button";
import Link from "next/link";
import useAppContext from "../../Context/UseAppContext";


const Block = () => {
   const { lang } = useAppContext();
	return (
		<>
			<Head>
				<title>HSR ABOGADOS</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Socios" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

         <HeaderSub titulo="INSTITUCIONAL" img="ofi3.jpg" />

         <div className={s.general_container}>

{/* <div className={s.title_container}>
   <h1 className={s.title_section}>Acerca de nostoros</h1>
</div> */}
<div className={s.master_container}>
   <div className={s.brief}>{lang == "ESP" ? esp[1] : eng[1]}</div>
   <div className={s.brief}>{lang == "ESP" ? esp[2] : eng[2]}</div>
   <div className={s.brief}>{lang == "ESP" ? esp[3] : eng[3]}</div>
</div>
{/* <div>{backgorund}</div> */}
</div>
	<ContactPeek />
         <Footer/>
		</>
	);
};




export default Block;

const backgorund = (
	<svg
		width="300"
		height="675"
		viewBox="0 0 684 675"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M342.006 675L0 337.506L342.006 1.82432e-05L684 337.506L342.006 675Z"
			fill="#666666"
			fillOpacity="0.06"
		/>
	</svg>
);

const esp = [
	"Nosotros",
"Cerolini & Ferrari Abogados es una firma de servicios legales que ofrece asesoramiento de excelencia con el objetivo de brindar soluciones creativas e innovadoras frente a las necesidades de sus clientes a nivel local e internacional",
"Nuestra firma se ha posicionado en los más prestigiosos rankings internacionales como uno de los principales estudios del país gracias a la sólida experiencia de nuestros abogados, una marcada vocación de servicio y un fuerte compromiso con la calidad de nuestra labor.",
   "Nuestra prioridad es entender en profundidad los negocios de nuestros clientes para ayudarlos en la generación de valor en sus compañías, a través de un servicio personalizado, ajustado a su perfil y necesidades. Con ese foco brindamos respuestas con un alto grado de especialización en las distintas áreas de práctica del Estudio.",
	"Socios",
	"Areas de Práctica",
];

const eng = [
	"About Us",
   "Cerolini & Ferrari Abogados es una firma de servicios legales que ofrece asesoramiento de excelencia con el objetivo de brindar soluciones creativas e innovadoras frente a las necesidades de sus clientes a nivel local e internacional",
   "Nuestra firma se ha posicionado en los más prestigiosos rankings internacionales como uno de los principales estudios del país gracias a la sólida experiencia de nuestros abogados, una marcada vocación de servicio y un fuerte compromiso con la calidad de nuestra labor.",
      "Nuestra prioridad es entender en profundidad los negocios de nuestros clientes para ayudarlos en la generación de valor en sus compañías, a través de un servicio personalizado, ajustado a su perfil y necesidades. Con ese foco brindamos respuestas con un alto grado de especialización en las distintas áreas de práctica del Estudio.",
	"Partners",
	"Practice Areas",
];


 const fondoGris = <svg width="414" height="507" viewBox="0 0 414 507" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M0 0H414L230.629 507H0V0Z" fill="#C4C4C4" fillOpacity="0.15"/>
 </svg>
 