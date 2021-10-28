import s from "./index.module.scss";
import React, { useRef, useState } from 'react';
import ContactPeek from "../../components/ContactPeek/ContactPeek";
import HeaderSub from "../../components/HeaderSub/HeaderSub"
import Link from "next/link";
import useAppContext from "../../Context/UseAppContext";
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer/Footer'

const ContactForm = () => {
	const { lang } = useAppContext();
   const [displayInputs, setDisplayInputs] = useState(true)
   
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
      setDisplayInputs(false);
       emailjs.sendForm('service_xwdzf6d', 'template_84u28uj', form.current, 'user_GqWB6DWgQTHICnHQEnvCU')
          .then((result) => {
             console.log(result.text);
          }, (error) => {
             console.log(error.text);
          });
   };


	return (
      <>
      <HeaderSub  titulo={lang=="ESP"?"CARRERA":"CARRERAS"} img="ofi4.jfif" />
		<div className={s.general_container}>

			<div className={s.title_container}>
         <h3 className={s.punch_line}>{lang=="ESP"?"Sumate a nuestro equipo":"Join Us"}</h3>
         <h4>{lang=="ESP"?esp[0]:eng[0]}</h4>
         <h5>{lang=="ESP"?esp[1]:eng[1]}</h5>
			</div>
			<div className={s.master_container}>
         {
            displayInputs
            ?
            <form className={s.form} ref={form} onSubmit={sendEmail}>
            <label>{lang=="ESP"?"Nombre":"Name"}</label>
            <input className={s.campo} type="text" name="user_name" />
            <label>Email</label>
            <input className={s.campo} type="email" name="user_email" />
            {/* <label>Perfil</label>
            <input type="file" name="my_file"/>  */}
          
            <label>{lang=="ESP"?"Contanos acerca de vos":"Tell us about yourself"}</label>
            <textarea className={s.campo2} name="message" />
            <input className={s.enviar} type="submit" value={lang=="ESP"?"Enviar":"Send"} />
         </form>
         :
            <div className={s.sent_message}>
             <h3>Su mensaje fue enviado</h3>
             <h3>Nos contactaremos a la brevedad</h3>
             <Link href="/">
						<a className={s.button_primary}>
							{lang == "ESP" ? esp[4] : eng[4]}
						</a>
					</Link>
            </div>

         }
         

			</div>
			{/* <div>{backgorund}</div> */}
		</div>
      <ContactPeek/>
      <Footer/>
      </>
	);
};

export default ContactForm;

const backgorund = (
	<svg
		width="300"
		height="675"
		viewBox="0 0 684 675"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M342.006 675L0 337.506L342.006 1.82432e-05L684 337.506L342.006 675Z"
			fill="#666666"
			fillOpacity="0.06"
		/>
	</svg>
);

const esp = [
	
	"Buscamos talentos que deseen desarrollar su carrera dentro de Hang Kuchen, Sporleder & Rodríguez Morales Abogados",
   "En HSR promovemos principalmente la incorporación de estudiantes universitarios y abogados recién recibidos. Esta incorporación temprana a la actividad profesional enriquece sus cualidades académicas y beneficia sus posibilidades de desarrollo mediante la asimilación de los conocimientos legales y el aprendizaje e incorporación de los principios y valores que constituyen el sello de calidad de nuestros abogados.",
	"Socios",
	"Areas de Práctica",
   "Volver al Inicio",
];

const eng = [
   "We are looking for talents who wish to develop their career within Hang Kuchen, Sporleder & Rodríguez Morales Abogados",
	"HSR promotes the incorporation of students into the firm through a consolidated system of internships. The early incorporation of students into our professional activity enriches their academic qualities and benefits their chances of development in Hang Kuchen, Sporleder & Rodríguez Morales through the assimilation of legal knowledge, principles and values which constitute our lawyers’ stamp of quality.",
	"Partners",
	"Practice Areas",
   "Back to Home Page",
];


 const fondoGris = <svg width="414" height="507" viewBox="0 0 414 507" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M0 0H414L230.629 507H0V0Z" fill="#C4C4C4" fillOpacity="0.15"/>
 </svg>
 

 const close =<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.63721 23.5979L23.9111 1.32404" stroke="white" strokeWidth="2"/>
<path d="M2 2L24.2739 24.2739" stroke="white" strokeWidth="2"/>
</svg>
