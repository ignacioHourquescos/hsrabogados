import s from "./socio.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Footer from '../../components/Footer/Footer'
import useAppContext from '../../Context/UseAppContext';

const Socio = () => {
	const router = useRouter();
	const socio = router.query.socio;
	const [partnerData, setPartnerData] = useState();
	const [loading, setLoading] = useState(true);
   const {lang} = useAppContext();

	useEffect(() => {
		fetch(`/api/partner?socio=${socio}`)
			.then((response) => response.json())
		
			.then((data) => {
				
            
				setPartnerData(data);
				setLoading(false);
			});
	}, [lang,socio]);

	return (
		<>
			<Head>
				<title> HSR ABOGADOS </title>{" "}
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR Abogados" />
				<meta property="og:description" content="Novedades" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

			<HeaderSub titulo={socio} img="HeaderSub1.png" />

			<div className={s.container}>
            {loading ? "" : 
               lang=="ESP"
                  ?partnerData.text.map((element) => <p key={element} className={s.detail}>{element}</p>)
                  :partnerData.textEng.map((element) => <p key={element} className={s.detail}>{element}</p>)
            } 
				<h3>{lang=="ESP"?"Informacion de Contacto":"Contact"}</h3>
				   {loading ? "" : partnerData.cont.map((element) => <p KEY={element} className={s.detail}>{element}</p>)}
				<h3>{lang=="ESP"?"Experiencia Laboral":"Work"}</h3> 
				   {loading ? "" : partnerData.labo.map((element) => <p KEY={element} className={s.detail}>{element}</p>)}
				<h3>{lang=="ESP"?"Experiencia Academica":"Academic"}</h3> 
				   {loading ? "" : partnerData.acad.map((element) => <p KEY={element} className={s.detail}>{element}</p>)}
				<h3>{lang=="ESP"?"Idiomas":"Languages"}</h3> 
            {loading ? "" : 
               lang=="ESP"
                  ?partnerData.idio.map((element) => <p KEY={element} className={s.detail}>{element}</p>)
                  :partnerData.idioEng.map((element) => <p KEY={element} className={s.detail}>{element}</p>)
            } 
			</div>
			<Footer></Footer>
		</>
	);
};

export default Socio;
