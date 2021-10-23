import React from "react";
import s from "./News.module.scss";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import Card from "../UI/Card/Card";
import useAppContext from "../../Context/UseAppContext";
import { createClient } from "contentful";

import { useState } from "react";



export default function News({ noticias }) {


	const [loading, setLoading] = useState(true);
	const { lang } = useAppContext();

	return (
		<>
      <div className={s.general_container}>
         
			<div className={s.title_container}>
				<SectionTitle color="black">{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
			</div>
			<div className={s.container}>
				{noticias.slice(0, 4).map((noticia) => (
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
		</>
	);
}

const esp = ["Novedades"];

const eng = ["Latest News"];

const newsArray = [
	{
		title: "Regulacion AFIP",
		content:
			"Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Primis ridenPossim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
	{
		title: "Regulacion AFIP",
		content:
			"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Psibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
	{
		title: "Regulacion AFIP",
		content:
			"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
];
