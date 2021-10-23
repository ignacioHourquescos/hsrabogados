import s from "./index.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Card from "../../components/UI/Card/Card";
import Footer from "../../components/Footer/Footer";
import useAppContext from '../../Context/UseAppContext';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ContactPeek from '../../components/ContactPeek/ContactPeek'

const Block = () => {

   const [services, setServices] = useState();
   const [loading, setLoading] = useState(true);
   const [showDetail, setShowDetail] = useState(true);
   const {lang} = useAppContext();


	useEffect(() => {
		fetch(`/api/services?lang=${lang}`)
			.then((response) => response.json())
			.then((data) => {
				setServices(data);
				setLoading(false);
			});
	}, [lang]);


const showDetailHandler = () => {
   console.log("boton")
   setShowDetail((prevState)=>{
      setShowDetail(!prevState.showDetail);
 });
}

	return (
		<>
			<Head>
				<title>HSR ABOGADOS</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Areas de Practica" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

        
         <HeaderSub titulo={lang=="ESP"?"AREAS DE PRACTICA":"PRACTICE AREAS"} img="ofi1.jpg" />
        
			

			<div className={s.container}>
				<div className={s.intro}>
            {loading?"":services[1]}
				</div>
            <div className={s.card_container}>
				{loading?"":services[0].map((element) => (
               <>{
                  showDetail && isMobile
                  ?
                  <div className={s.min_title} onClick={()=>setShowDetail(false)}>{element.title} <span>+</span></div>
                  :
                  
					   <Card
						   key={element.id}
						   title={element.title}
						   content={element.content}
						   masDetalle={false}
					   />
                  


               }

               </>
				))}
            </div>
			</div>
         <ContactPeek />
			<Footer />
		</>
	);
};

export default Block;

