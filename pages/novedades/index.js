import s from "./index.module.scss";
import Head from "next/head";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Card from "../../components/UI/Card/Card";
import Footer from "../../components/Footer/Footer";
import { createClient } from 'contentful'
import useAppContext from "../../Context/UseAppContext";

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

const Block = ({noticias}) => {
   const { lang } = useAppContext();
	return (
		<>
			<Head>
				<title>HSR - Novedades</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR - Novedades" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Areas de Practica" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

			<HeaderSub titulo="NOVEDADES" img="HeaderSub1.png" />

			<div className={s.container}>
				<div className={s.intro}>
					Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed
					alii enim explicari. Primis ridenPossim quodsi gubergren pro cu. Facer
					mandamus eu vis, pro iudico regione prodesset cu
				</div>

           <div className={s.card_container}>
				{noticias.map((noticia) => (
					<Card
						key={noticia.sys.id}
						slug={noticia.fields.slug}
						title={lang == "ESP"?      noticia.fields.titulo: noticia.fields.tituloIngles}
						content={lang == "ESP" ?   noticia.fields.brief : noticia.fields.briefIngles}
						masDetalle={true}
						noticias={noticias}
					/>
				))}
            </div>
			</div>

			<Footer />
		</>
	);
};

export default Block;
