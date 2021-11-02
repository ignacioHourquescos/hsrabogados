import s from "./socio.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Footer from "../../components/Footer/Footer";
import useAppContext from "../../Context/UseAppContext";
import Image from 'next/image'
import ContactPeek from '../../components/ContactPeek/ContactPeek'

const Socio = () => {
	const router = useRouter();
	const socio = router.query.socio;
	const [partnerData, setPartnerData] = useState();
	const [loading, setLoading] = useState(true);
	const { lang } = useAppContext();

	useEffect(() => {
		fetch(`/api/partner?socio=${socio}`)
			.then((response) => response.json())

			.then((data) => {
				setPartnerData(data);
				setLoading(false);
			});
	}, [lang, socio]);

	return (
		<>
			<Head>
				<title> HSR - {socio} </title>{" "}
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR Abogados" />
				<meta property="og:description" content="Novedades" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

			<HeaderSub titulo={socio} img="ofi5.jfif" />

			<div className={s.main_container}>
				<div className={s.image_container}>

					<Image className={s.image} src={socio=="HANG KUCHEN"?'/manfred.png':socio=="SPORLEDER"?'/guillermo.png':'/sebastian.png'} alt="socio" width="350px" height="350px"></Image>
					<div className={s.contact_icons}>
						<div>{linkedinLogo}</div>
						<div>{linkedinLogo}</div>
						<div>{linkedinLogo}</div>
					</div>
				</div>
				<div className={s.container}>
					{loading
						? ""
						: lang == "ESP"
							? partnerData.text.map((element) => (
								<p key={element} className={s.detail}>
									{element}
								</p>
							))
							: partnerData.textEng.map((element) => (
								<p key={element} className={s.detail}>
									{element}
								</p>
							))}
					<h3>{lang == "ESP" ? "Informacion de Contacto" : "Contact"}</h3>
					{loading
						? ""
						: partnerData.cont.map((element) => (
							<p KEY={element} className={s.detail}>
								{element}
							</p>
						))}



					<h3>{lang == "ESP" ? "Posicion Actual" : "Current Position"}</h3>
					{loading
						? ""
						: lang == "ESP"
							? partnerData.posicion.map((element) => (
								<p KEY={element} className={s.detail}>
									{element}
								</p>
							))
							:
							partnerData.posicionEng.map((element) => (
								<p KEY={element} className={s.detail}>
									{element}
								</p>
							))
					}




					<h3>{lang == "ESP" ? "Experiencia Laboral" : "Professional Background"}</h3>
					{loading
						? ""
						: lang == "ESP"
							? partnerData.labo.map((element) => (
								<p KEY={element} className={s.detail}>
									{element}
								</p>
							))
							:
							partnerData.laboIngles.map((element) => (
								<p KEY={element} className={s.detail}>
									{element}
								</p>
							))
					}



					<h3>{lang == "ESP" ? "Experiencia Academica" : "Studies Completed"}</h3>
					{loading
						? ""
						: partnerData.acad.map((element) => (
							<p KEY={element} className={s.detail}>
								{element}
							</p>
						))}



						
					<h3>{lang == "ESP" ? "Idiomas" : "Languages"}</h3>
					{loading
						? ""
						: lang == "ESP"
							? partnerData.idio.map((element) => (
								<p KEY={element} className={s.detail}>
									{element}
								</p>
							))
							: partnerData.idioEng.map((element) => (
								<p KEY={element} className={s.detail}>
									{element}
								</p>
							))}
				</div>
			</div>
			<ContactPeek />
			<Footer></Footer>
		</>
	);
};

export default Socio;


let linkedinLogo = <svg className={s.footer_social} xmlns="http://www.w3.org/2000/svg" width="36" height="63" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>


