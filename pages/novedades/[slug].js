import ss from "./slug.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import useAppContext from '../../Context/UseAppContext';
import Footer from '../../components/Footer/Footer'
import {
   LinkedinShareButton,
   WhatsappShareButton
 } from "react-share";

 import {
   LinkedinIcon,
   WhatsappIcon,
 } from "react-share";


const client = createClient({
	space: process.env.CONTENFUL_SPACE_ID,
	accessToken: process.env.CONTENFUL_ACCESS_KEY,
});

const Novedades = ({ noticia }) => {

	const router = useRouter();
	const slug = router.query.slug;
   const { lang } = useAppContext();

	return (
		<>
			<Head>
				<title> HSR ABOGADOS </title>{" "}
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Novedades" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

         <HeaderSub titulo={lang=="ESP"?noticia.fields.titulo:noticia.fields.tituloIngles} img="HeaderSub1.png" />

			<div className={ss.container}>
            {lang == "ESP" ? 
            <>
                <div className={ss.autor}>Autor: {noticia.fields.autor}</div>
            <div className={ss.date}>Fecha: {noticia.sys.updatedAt.substring(0,10)}</div>    
        

				<div className={ss.brief}>{noticia.fields.brief}</div>

				<div className={ss.content}>{documentToReactComponents(noticia.fields.cuerpo)}</div>
            <div className={ss.share_container}>
            <span className={ss.share} >Compartir via:</span>
            <LinkedinShareButton style={{marginLeft:"0.7rem"}}  url="https://www.lanacion.com">
               <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton style={{marginLeft:"0.7rem"}} url="https://www.lanacion.com">
               <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            </div>
            </>
            :
            <>
            <div className={ss.autor}>Author: {noticia.fields.autor}</div>
            <div className={ss.date}>Date: {noticia.sys.updatedAt.substring(0,10)}</div>        
				<div className={ss.brief}>{noticia.fields.briefIngles}</div>
				<div className={ss.content}>{documentToReactComponents(noticia.fields.cuerpoIngles)}</div>
            </>
            }
     
			</div>

         <Footer/>
		</>
	);
};

export default Novedades;

export const getStaticPaths = async () => {
	const res = await client.getEntries({ content_type: "noticia" });
	const paths = res.items.map((noticia) => {
		return {
			params: { slug: noticia.fields.slug },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: "noticia",
		"fields.slug": params.slug,
	});
	return {
		props: { noticia: items[0] },
	};
}


