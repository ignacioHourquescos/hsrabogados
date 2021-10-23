// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getExpenses(req,res){
   var socio= req.query.socio;
   const array = comments.filter(element => element.name == socio)
   res.send(JSON.stringify(array[0]))  			
}


const comments = [
	
   {
		id: 1,
		name: "HANG KUCHEN",
		text: [
         "Manfred es  valorado por sus clientes por su conocimiento de las regulaciones de derecho bancario y su creatividad a la hora de buscar caminos alternativos para resolver los problemas",
         "gustín es abogado graduado de la Universidad Austral. Su práctica profesional se centra en derecho comercial, financiero, bancario y mercado de capitales.",
         "Dentro de su especialidad, ha prestado asesoramiento en operaciones tales como reestructuraciones, inversiones extranjeras, operaciones de mercado de capitales (nacionales e internacionales), fusiones y adquisiciones, derivados, securitización, fideicomisos y control de cambios. Asimismo, ha intervenido en distintos litigios y arbitrajes vinculados a conflictos comerciales y financieros."
      ],
      textEng: [
         "Manfred is valued by his clients for his knowledge of banking law regulations and his creativity in finding alternative ways to solve problems ",
         "Gustín is a lawyer graduated from Austral University. His professional practice focuses on commercial, financial, banking and capital market law.",
         "Within his specialty, he has provided advice on operations such as restructuring, foreign investments, capital market operations (national and international), mergers and acquisitions, derivatives, securitization, trusts and exchange control. He has also intervened in various litigation and arbitrations related to commercial and financial conflicts."
      ],
      cont: [
         "manfred@hsr.com",
         "1154545454"
      ],
      labo: [
         "Bruchou, Fernández Madero & Lombardi, 2004-2006 / 2008 – 2013.",
         "White & Case LLP, Miami, 2007-2008.",
         "Itaú BBA, Buenos Aires, 2010-2011."
      ],
      acad: [
         "Universidad del CEMA, Buenos Aires, Master en Finanzas, 2010-2011.",
         "Louisiana State University, LA, EE.UU., Master of Laws (LL.M.), 2006 – 2007.",    
         "Universidad Austral, Abogado, 2004."
      ],
      idio: ["Español","Ingles","Portugués"],
      idioEng : ["Spanish","English","Portuguese"]
	},

   
   {
		id: 1,
		name: "SPORDELER",
		text: [
         "Manfred es  valorado por sus clientes por su conocimiento de las regulaciones de derecho bancario y su creatividad a la hora de buscar caminos alternativos para resolver los problemas",
         "gustín es abogado graduado de la Universidad Austral. Su práctica profesional se centra en derecho comercial, financiero, bancario y mercado de capitales.",
         "Dentro de su especialidad, ha prestado asesoramiento en operaciones tales como reestructuraciones, inversiones extranjeras, operaciones de mercado de capitales (nacionales e internacionales), fusiones y adquisiciones, derivados, securitización, fideicomisos y control de cambios. Asimismo, ha intervenido en distintos litigios y arbitrajes vinculados a conflictos comerciales y financieros."
      ],
      textEng: [
         "Manfred is valued by his clients for his knowledge of banking law regulations and his creativity in finding alternative ways to solve problems ",
         "Gustín is a lawyer graduated from Austral University. His professional practice focuses on commercial, financial, banking and capital market law.",
         "Within his specialty, he has provided advice on operations such as restructuring, foreign investments, capital market operations (national and international), mergers and acquisitions, derivatives, securitization, trusts and exchange control. He has also intervened in various litigation and arbitrations related to commercial and financial conflicts."
      ],
      cont: [
         "manfred@hsr.com",
         "1154545454"
      ],
      labo: [
         "Bruchou, Fernández Madero & Lombardi, 2004-2006 / 2008 – 2013.",
         "White & Case LLP, Miami, 2007-2008.",
         "Itaú BBA, Buenos Aires, 2010-2011."
      ],
      acad: [
         "Universidad del CEMA, Buenos Aires, Master en Finanzas, 2010-2011.",
         "Louisiana State University, LA, EE.UU., Master of Laws (LL.M.), 2006 – 2007.",    
         "Universidad Austral, Abogado, 2004."
      ],
      idio: ["Español","Ingles","Portugués"],
      idioEng : ["Spanish","English","Portuguese"]
	},


   {
		id: 1,
		name: "RODRIGUEZ MORALES",
		text: [
         "Manfred es  valorado por sus clientes por su conocimiento de las regulaciones de derecho bancario y su creatividad a la hora de buscar caminos alternativos para resolver los problemas",
         "gustín es abogado graduado de la Universidad Austral. Su práctica profesional se centra en derecho comercial, financiero, bancario y mercado de capitales.",
         "Dentro de su especialidad, ha prestado asesoramiento en operaciones tales como reestructuraciones, inversiones extranjeras, operaciones de mercado de capitales (nacionales e internacionales), fusiones y adquisiciones, derivados, securitización, fideicomisos y control de cambios. Asimismo, ha intervenido en distintos litigios y arbitrajes vinculados a conflictos comerciales y financieros."
      ],
      textEng: [
         "Manfred is valued by his clients for his knowledge of banking law regulations and his creativity in finding alternative ways to solve problems ",
         "Gustín is a lawyer graduated from Austral University. His professional practice focuses on commercial, financial, banking and capital market law.",
         "Within his specialty, he has provided advice on operations such as restructuring, foreign investments, capital market operations (national and international), mergers and acquisitions, derivatives, securitization, trusts and exchange control. He has also intervened in various litigation and arbitrations related to commercial and financial conflicts."
      ],
      cont: [
         "manfred@hsr.com",
         "1154545454"
      ],
      labo: [
         "Bruchou, Fernández Madero & Lombardi, 2004-2006 / 2008 – 2013.",
         "White & Case LLP, Miami, 2007-2008.",
         "Itaú BBA, Buenos Aires, 2010-2011."
      ],
      acad: [
         "Universidad del CEMA, Buenos Aires, Master en Finanzas, 2010-2011.",
         "Louisiana State University, LA, EE.UU., Master of Laws (LL.M.), 2006 – 2007.",    
         "Universidad Austral, Abogado, 2004."
      ],
      idio: ["Español","Ingles","Portugués"],
      idioEng : ["Spanish","English","Portuguese"]
	},

];
