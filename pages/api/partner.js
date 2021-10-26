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
         "Manfred Hang Kuchen es valorado por sus clientes por su “capacidad para anticiparse a los hechos y mostrar un alto compromiso con las necesidades diarias de sus clientes”.",
         "Manfred es abogado graduado de la Universidad Católica Argentina (UCA), cuenta con una Maestría en Derecho Empresario de la Universidad de San Andrés (UdeSA) y un Posgrado en Asesoramiento Jurídico de Empresas de la Universidad Católica Argentina (UCA). Su práctica profesional en centra en el derecho comercial, administrativo y resolución de controversias.",
         "Dentro de su especialidad, ha prestado asesoramiento en operaciones tales como reestructuraciones, inversiones extranjeras, operaciones de mercado de capitales (nacionales e internacionales), fusiones y adquisiciones, derivados, securitización, fideicomisos y control de cambios. Asimismo, ha intervenido en distintos litigios y arbitrajes vinculados a conflictos comerciales y financieros.",
         "De manera previa a fundar Hang Kuchen, Sporleder & Rodríguez Morales Abogados, fue socio de MBP Partners Abogados y trabajó como abogado asociado del estudio Bruchou, Fernández Madero & Lombardi. Manfred también posee experiencia como abogado in-house de empresas, toda vez que asesoró internamente a sociedades de los Grupos Pegasus e Isolux Corsan. Asimismo, trabajó en el sector público, formando parte del Gobierno de la Ciudad de Buenos Aires y del Gobierno Nacional de la República Argentina.",
         "Es autor de numerosos artículos sobre temas relativos a su especialidad, así como también profesor invitado en distintas universidades argentinas.",
         "Habla y escribe fluidamente en idioma inglés y tiene conocimientos básicos de idioma alemán."
      ],
      textEng: [
         "Manfred Hang Kuchen is recognized by his clients for his “ability to anticipate events and show a high commitment to the daily needs of his clients”.",
         "Manfred is a lawyer graduated from the Universidad Católica Argentina (UCA), has a Master's Degree in Business Law from the University of San Andrés (UdeSA) and a Postgraduate Degree in Business Legal Advice from the Universidad Católica Argentina (UCA). His professional practice focuses on commercial, administrative and dispute resolution law.",
         "Prior to founding Hang Kuchen, Sporleder & Rodríguez Morales Abogados, he was a partner at “MBP Partners Abogados” and worked as an associate lawyer for the law firm Bruchou, Fernández Madero & Lombardi. Manfred also has experience as a corporate in-house lawyer, since he has provided advice in companies of the Pegasus and Isolux Corsan Groups internally. He also worked in the public sector, as part of the Government of the City of Buenos Aires and the National Government of the Argentine Republic.",
         "He is the author of numerous articles on topics related to his expertise, as well as a visiting professor at different Argentine universities.",
         "He speaks and writes fluently in English and has a basic knowledge of German."
      ],
      cont: [
         "mhk@hsrabogados.com",
         "+54 (11) 6346-2790"
      ],
      labo: [
         "Bruchou, Fernández Madero & Lombardi.",
         "Grupo Pegasus",
         "Grupo Isolux",
         "Gobierno de la Ciudad Autónoma de Buenos Aires",
         "Gobierno Nacional de la República Argentina",
         "MBP Partners Abogados"

      ],
      laboIngles: [
         "Bruchou, Fernández Madero & Lombardi.",
         "Grupo Pegasus",
         "Grupo Isolux",
         "Government of the city of Buenos Aires",
         "National Government of the Argentinian Republic",
         "MBP Partners Abogados"

      ],
      acad: [
         "Universidad Católica Argentina",
         "Universidad Rey Juan Carlos (Madrid, España)",    
         "Universidad de San Andrés"
      ],
      idio: ["Español","Ingles","Aleman"],
      idioEng : ["Spanish","English","German"]
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
         "Dentro de su especialidad, ha prestado asesoramiento en operaciones tales como reestructuraciones, inversiones extranjeras, operaciones de mercado de capitales (nacionales e internacionales), fusiones y adquisiciones, derivados, securitización, fideicomisos y control de cambios. Asimismo, ha intervenido en distintos litigios y arbitrajes vinculados a conflictos comerciales y financieros.",
         "De manera previa a fundar Hang Kuchen, Sporleder & Rodríguez Morales Abogados, fue socio de MBP Partners Abogados y trabajó como abogado asociado del estudio Bruchou, Fernández Madero & Lombardi. Manfred también posee experiencia como abogado in-house de empresas, toda vez que asesoró internamente a sociedades de los Grupos Pegasus e Isolux Corsan. Asimismo, trabajó en el sector público, formando parte del Gobierno de la Ciudad de Buenos Aires y del Gobierno Nacional de la República Argentina.",
         "Es autor de numerosos artículos sobre temas relativos a su especialidad, así como también profesor invitado en distintas universidades argentinas.",
         "Habla y escribe fluidamente en idioma inglés y tiene conocimientos básicos de idioma alemán."
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

