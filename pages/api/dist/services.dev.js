"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getExpenses;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function getExpenses(req, res) {
  var lang = req.query.lang;

  if (lang == "ESP") {
    res.send(JSON.stringify([services, intro]));
  }

  if (lang == "ENG") {
    res.send(JSON.stringify([servicesEng, introEng]));
  }
} //DATA EN ESPAÑOL - INTRODUCCION Y SERVICIOSs


var intro = "El estudio esta enfocado en trabajar en las areas relacionadas con Lorem on Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari ipsumsdfsd  dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari";
var services = [{
  id: 1,
  title: "DERECHO SOCIETARIO",
  content: "Asesoramos a nuestros clientes en la creación de nuevas estructuras, due diligence, convenios de accionistas, reorganizaciones, resolución de conflictos societarios, inscripciones y registros societarios, y todas las cuestiones relacionadas con el día a día."
}, {
  id: 2,
  title: "TELECOMUNICACIONES MEDIOS Y TECNOLOGIA",
  content: "La industria de los medios y el entretenimiento, por su parte, se enfrenta a cambios radicales, principalmente a través del desarrollo de nuevas plataformas y tecnologías. El asesoramiento incluye complejos proyectos de infraestructura, como la instalación de cables submarinos; la obtención de licencias de telecomunicaciones para los distintos servicios; y el análisis de servicios innovadores a la luz de las normas de telecomunicaciones. "
}, {
  id: 3,
  title: "LITIGIOS Y RESOLUCION DE CONTROVERSIAS",
  content: "Nuestra experiencia en litigios cubre una completa gama en asuntos contenciosos, lo que incluye el trabajo de asesoría, negociación y presentaciones durante todo el proceso. Representamos a clientes locales y extranjeros ante los tribunales federales de la Ciudad de Buenos Aires y de los estados provinciales –incluida la Corte Suprema– en juicios civiles, comerciales, impositivos, laborales y acciones colectivas. Asimismo, actuamos ante diversos organismos del Estado nacional, provincial o municipal (Banco Central, Defensa del Consumidor, Tribunal Fiscal de la Nación, entre otros)"
}, {
  id: 4,
  title: "DERECHO LABORAL",
  content: "Nuestra área de derecho laboral brinda una amplia gama de servicios que incluye: (i) la negociación y redacción de contratos de trabajo, convenios colectivos, planes de seguridad social, acuerdos de extinción de la relación laboral y documentos relacionados con la seguridad en el trabajo; (ii) la confección y modificación de estructuras compensatorias; (iii) la adaptación de políticas internacionales a la ley argentina; (iv) reorganizaciones y reestructuraciones, despidos masivos, planes de retiro voluntario, programas preventivos de crisis y negociaciones en todos los ámbitos para instrumentar las reorganizaciones; y(v) desvinculaciones de funcionarios jerárquicos y participación en auditorias de empresa en los casos de fraude empresario."
}, {
  id: 5,
  title: "IMPUESTOS Y COMERCIO EXTERIOR",
  content: "Jugamos un papel importante en la planificación fiscal y la negociación de muchas operaciones de fusiones y adquisiciones y otras transacciones transfronterizas, así como en el diseño e implementación de reorganizaciones societarias y transferencias de activos libres de impuestos. Asesoramos también a nuestros clientes en todo tipo de asuntos aduaneros, en muchos casos en forma coordinada con nuestros expertos en Comercio Internacional, incluyendo cuestiones regulatorias, representación de clientes en procedimientos administrativos y judiciales, planificación estratégica de operaciones, asesoramiento sobre regulaciones nacionales y tratados internacionales, cuestiones arancelarias y barreras a la importación."
}, {
  id: 6,
  title: "DERECHO PUBLICO Y ADMINISTRATIVO",
  content: "Brindamos asesoramiento en una amplia gama de cuestiones: (i) Estructuras legales complejas vinculadas con actividades reguladas: empresas prestadoras de servicios públicos, puertos, autopistas, aeropuertos, bancos, aseguradoras, industria hidrocarburífera, salud, agroindustria y proveedores de bienes y servicios del Estado; (ii) Obras públicas, proyectos de infraestructura, financiación de proyectos y asociaciones público-privadas; (iii) Compañías privadas con intervención estatal o con participación accionaria estatal; y (iv) Contratos administrativos y procedimientos de selección de contratistas."
}]; //DATA EN INGLES - INTRODUCCION Y SERVICIOS

var introEng = "The firm works in different areas related to Lorem ipsum dolor sit amet, pro ex modo veniam complectitur, ad sed alii enim explicari";
var servicesEng = [{
  title: "CORPORATE LAW",
  content: "We provide high quality advice on most sophisticated and innovative transactions, including: the creation of complex new corporate structures, due diligence, shareholders agreements, restructuring and spin-offs, governmental approvals and regulatory requirements, and day-to-day corporate matters."
}, {
  title: "TELECOMUNICATION MEDIA AND TECHNOLOGY",
  content: "The media and entertainment industry, meanwhile, faces radical changes, mainly through the development of new platforms and technologies. The advice includes complex infrastructure projects, such as the installation of submarine cables; obtaining telecommunication licenses for the different services; and the analysis of innovative services in the light of telecommunication standards."
}, {
  title: "LITIGATION AND DISPUTE RESOLUTION",
  content: "Our litigation experience covers a full range of contentious matters, including advisory work, negotiation and filings throughout the entire process. We cover a wide range of matters including, the representation before federal and local courts (including the Supreme Court) on behalf of both Argentine and international clients in civil, commercial, tax, administrative, labor litigation and class actions. Besides, we advise on administrative proceedings before federal, provincial and local agencies and institutions, including the Argentine Central Bank, the Consumer Protection Agency, the Federal Tax Court, among others."
}, {
  title: "LABOR LAW",
  content: "Our labor and employment practice covers a wide range of matters including (i) collective bargaining, negotiations, employee stock options and benefit plans, labor disputes, terminations, workplace safety issues; (ii) draft and amend compensation programs; (iii) localization of international policies to comply with Argentine law; (iv) reorganizations and restructuring, massive dismissals, voluntary retirement, plans, preventive crisis proceedings and negotiations at all stages of the processes; and (i) termination of hierarchical employees and process of corporate fraud."
}, {
  title: "FOREING TRADE AND TAXES",
  content: "We play a major role in tax planning and negotiating many M&A transactions and other cross-border transactions as well as in designing and implementing tax-free corporate reorganizations and transfers of assets. We advise our clients on all kinds of customs matters, in many cases in coordination with our International Trade practice group. Such advice includes regulatory matters, administrative and judicial proceedings, strategic operations, advice on national regulations and international treaties, duty issues and import restrictions."
}, {
  title: "PUBLIC AND ADMINISTRATIVE LAW",
  content: "Our public and administrative law practice covers a wide range of matters including: (i) Design of complex legal structures applicable to regulated activities, including advice to and professional representation of public utilities, ports, highways, airports, banks, insurance, hydrocarbons, health, agro-industrial companies and governmental suppliers of goods and services; (ii) Public works, infrastructure projects, project financing and public-private partnerships; (iii) Advice to private companies under government administration or subject to governmental stock participation; and (iv) Administrative contracts and procurement proceedings."
}];