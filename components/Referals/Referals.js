import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import ss from "./Carrousel.module.scss";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import useAppContext from '../../Context/UseAppContext';





const Carrousel = () => {
   const { lang } = useAppContext();
	return (<>
		<div className={ss.container}>
      <div className={ss.overlay}></div>
      <div className={ss.content}>

      <div className={ss.title_container}>
      <SectionTitle>{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
</div>
               <div className={ss.carousel_container}>
			<Carousel autoplay>
			
					<div className={ss.contentStyle}>
						<p className={ss.referencia}>
                Se caracterizan por anticiparse a los hechos y mostrar un alto
							compromiso en las necesidades de nuestro día a día. Su
							conocimiento del negocio también facilita nuestro trabajo en un
							mercado tan cambiante y desafiante como el argentino.
                     <p style={{fontWeight:"bold", marginTop:"1rem", fontStyle:"normal"}}>Paolo Padovese - Director General - CMC di Ravnna</p>
						</p>
					</div>

			
					<div className={ss.contentStyle}>
						<p className={ss.referencia}>
                  El equipo nos propone soluciones practicas e innovadoras en sus
							distintas areas de practico. Son muy profesionales, proactivos y
							comprometidos. La confianza generada nos permite delegarle asuntos
							muy variados y complejos.
                     <p style={{fontWeight:"bold", marginTop: "1rem", fontStyle:"normal"}}>Nicolás Raffo - Presidente - Duracel Argentina</p>
						</p>
					</div>
		
			</Carousel>
         </div>
		</div>
      </div>
	</>);
};

export default Carrousel;

const esp = [
   "Testimoniales"
]

const eng = [
   "Testimonials"
]

