// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function getExpenses(req,res){
   var lang= req.query.lang; 
   if(lang=="ESP"){res.send(JSON.stringify([services, intro]))}
   if(lang=="ENG"){res.send(JSON.stringify([servicesEng, introEng]))}		
}

//DATA EN ESPAÑOL - INTRODUCCION Y SERVICIOS
const intro = "El estudio esta enfocado en trabajar en las areas relacionadas con Lorem on Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari ipsumsdfsd  dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari"
const services = [
	{
		title: "CORPORATIVO",
		content:
			"Lorem asdasdasd ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Primis ridenPossim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
	{
		title: "LITIGIOS",
		content:
			"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Psibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
	{
		title: "IMPUESTOS",
		content:"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
   {
		title: "COMERCIO EXTERIOR",
		content:"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
   {
		title: "DERECHO ADMINISTRATIVO",
		content:"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
   {
		title: "TMT",
		content:"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
];


//DATA EN INGLES - INTRODUCCION Y SERVICIOS
const introEng = "The firm works in different areas related to Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari"
const servicesEng = [
	{
		title: "COMERCIALLLL",
		content:
			"Lorem asdasdasd ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Primis ridenPossim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
	{
      title: "COMERCIALLLL",
		content:
			"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Psibus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
	{
      title: "COMERCIALLLL",
		content:
			"LOREM Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari. Pribus sea. Possim quodsi gubergren pro cu. Facer mandamus eu vis, pro iudico regione prodesset cu.",
	},
];

