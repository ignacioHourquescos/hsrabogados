// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getExpenses(req, res) {
   var socio = req.query.socio;
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
      idio: ["Español", "Ingles", "Aleman"],
      idioEng: ["Spanish", "English", "German"],
      img: ["/manfred.png"]
   },


   {
      id: 1,
      name: "SPORLEDER",
      text: [
         "Los clientes suelen resaltar de Guillermo Sporleder la “agilidad y flexibilidad para resolver situaciones particulares y complejas”.",
         "Guillermo es abogado egresado de la Universidad de Buenos Aires (UBA), cuenta con un Posgrado de Especialización en Derecho Laboral y Relaciones Internacionales del Trabajo de la Universidad Católica Argentina (UCA) y una Maestría en Derecho Empresario de la Universidad de San Andrés (UdeSA). ",
         "Sus más de quince años de experiencia profesional lo convierten en un referente en derecho laboral individual y colectivo, derecho administrativo del trabajo, litigios y derecho de la seguridad social.",
         "De manera previa a fundar Hang Kuchen, Sporleder & Rodríguez Morales Abogados, se desempeñó como head del área de derecho laboral en MBP Partners Abogados y como asociado senior de los estudios Moltedo y Cárdenas, Cassagne & Asociados. Asimismo, trabajó en sus inicios en la justicia nacional.",
         "Es autor de diversos artículos sobre temas relativos a su especialidad.",
         "Habla y escribe fluidamente en idioma inglés y tiene conocimientos básicos de idioma portugués.",
         "Es miembro del Colegio Público de Abogados de la Capital Federal, del Colegio de Abogados de San Isidro y la Asociación Argentina de Derecho del Trabajo y la Seguridad Social."
      ],
      textEng: [
         "Clients often highlight Guillermo Sporleder's “agility and flexibility to resolve particular and complex situations“.",
         "Guillermo is a lawyer graduated from the University of Buenos Aires (UBA), has a Postgraduate Specialization in Labor Law and International Labor Relations from the Argentine Catholic University (UCA) and a Master's Degree in Business Law from the University of San Andrés (UdeSA ).",
         "His more than fifteen years of professional experience make him a benchmark in individual and collective labor law, administrative labor law, litigation and social security law.",
         "Before founding Hang Kuchen, Sporleder & Rodríguez Morales Abogados, he was the head of the labor law area at MBP Partners Abogados and he worked as a senior associate at Moltedo law firm and Cárdenas, Cassagne & Asociados. He also worked in the national commercial courts.",
         "He is author of several articles on topics related to his specialty.",
         "He speaks and writes fluently in English and has basic knowledge of Portuguese.",
         "He is a member of the Public Bar Association of the City of Buenos Aires, the San Isidro Bar Association and the Argentine Association of Labor and Social Security Law."
      ],
      cont: [
         "gs@hsrabogados.com",
         "+54 (11) 6346-2790"
      ],
      posicion: [
         "Hang Kuchen, Sporleder & Rodríguez Morales Abogados",
         "Socio"
      ],

      posicionEng: [
         "Hang Kuchen, Sporleder & Rodríguez Morales Abogados",
         "Partner"
      ],

      labo: [
         "Justicia Comercial (Juzgados Nro. 6 y 12)",
         "Estudio Cárdenas, Cassagne & Asociados",
         "Estudio Moltedo",
         "MBP Partners Abogados",
      ],

      laboIngles: [
         "National Commercial Justice",
         "Estudio Cárdenas, Cassagne & Asociados",
         "Estudio Moltedo",
         "MBP Partners",

      ],
      acad: [
         "Universidad de Buenos Aires",
         "Universidad Católica Argentina",
         "Universidad de San Andrés"
      ],




      idio: ["Español", "Ingles", "Portugúes"],
      idioEng: ["Spanish", "English", "Portuguese"],
      img: ["/manfred.png"]
   },


   {
      id: 1,
      name: "RODRIGUEZ MORALES",
      text: [
         "“El trabajo de forma cercana y comprometida” así como también su “alto conocimiento sobre cuestiones vinculadas muy específicas vinculadas a tecnología, medios y telecomunicaciones (TMT)”, son características que destacan los clientes de Sebastián Rodríguez Morales.",
         "Sebastián es abogado graduado de la Universidad del Salvador (USAL), cuenta con una Maestría en Derecho Empresario de la Universidad de San Andrés (UdeSA) y un Posgrado de Economía y Financias de la Universidad Pompeau Fabra (Barcelona, España). Su práctica profesional en centra en el derecho comercial y administrativo, y es el socio del estudio a cargo del departamento de Tecnología, Medios y Telecomunicaciones (TMT).",
         "Ha asesorado a diversas compañías de tecnología y medios en materia de derecho regulatorio, así como también a start-ups tecnológicas.",
         "Antes de fundar Hang Kuchen, Sporleder & Rodríguez Morales Abogados, fue asociado senior de Marval, O’ Farrell & Mairal, y previamente, formó parte de los Estudio Moltedo y Ortiz & Asociados. Asimismo, se desempeño como responsable legal de la unidad medios del Grupo Indalo (C5N, Radio 10, Ideas del Sur, Radio POP, entre otras).",
         "Habla y escribe fluidamente en idioma inglés.",
      ],
      textEng: [
         "“Working closely and committed“ as well as his “high knowledge of very specific related issues related to technology, media and telecommunications (TMT)“, are characteristics highlighted by Sebastián Rodríguez Morales' clients.",
         "Sebastián is a lawyer graduated from the Universidad del Salvador (USAL), has a Master's Degree in Business Law from the University of San Andrés (UdeSA) and a Postgraduate Degree in Economics and Finance from the Pompeu Fabra University (Barcelona, ​​Spain). His professional practice focuses on commercial and administrative law, and he is the partner in charge of the Department of Technology, Media and Telecommunications (TMT).",
         "He has advised various technology and media companies on regulatory law, as well as technology start-ups.",
         "BefHe speaks and writes fluently in English.He is author of several articles on topics related to his specialty.",
         
        
      ],
      cont: [
         "srm@hsrabogados.com",
         "+54 (11) 6346-2790"
      ],
      posicion: [
         "Hang Kuchen, Sporleder & Rodríguez Morales Abogados",
         "Socio"
      ],

      posicionEng: [
         "Hang Kuchen, Sporleder & Rodríguez Morales Abogados",
         "Partner"
      ],

      labo: [
         "Marval, O’Farrell & Mairal Abogados",
         "Grupo Indalo",
         "Estudio Moltedo",
         "Estudio Ortíz & Asociados",
      ],

      laboIngles: [
         "Marval, O’Farrell & Mairal Abogados",
         "Grupo Indalo",
         "Estudio Ortíz & Asociados",
         "Estudio Moltedo",

      ],
      acad: [
         "Universidad del Salvador",
         "Universidad Pompeu Fabra",
         "Universidad de San Andrés"
      ],




      idio: ["Español", "Ingles"],
      idioEng: ["Spanish", "English"],
      img: ["/manfred.png"]
   },

];

