import s from "./index.module.scss";
import React, { useRef } from 'react';
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import HeaderSub from "../../components/HeaderSub/HeaderSub"
import Link from "next/link";
import useAppContext from "../../Context/UseAppContext";
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const { lang } = useAppContext();
   
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_xwdzf6d', 'template_84u28uj', form.current, 'user_GqWB6DWgQTHICnHQEnvCU')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
   };


	return (
      <>
      <HeaderSub titulo={lang=="ESP"?"CONTACTO":"CONTACT"} img="ofi1.jpg" />
		<div className={s.general_container}>

			<div className={s.title_container}>
				<SectionTitle color="black">{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
			</div>
			<div className={s.master_container}>
         <form className={s.form} ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input className={s.campo} type="text" name="user_name" />
            <label>Email</label>
            <input className={s.campo} type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea className={s.campo2} name="message" />
            <input className={s.enviar} type="submit" value="Send" />
         </form>

			</div>
			{/* <div>{backgorund}</div> */}
		</div>
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
	"Contactanos",
	"Somos una firma de abogados jovenes y de amplia trayectoria. A través\
  del pensamiento lateral buscamos soluciones alternativas a situaciones\
  complejas.",
	"Socios",
	"Areas de Práctica",
];

const eng = [
	"Contact Us",
	"We are a law firm, of young people and recongized experience. Driven by out of the box solutions\
   and lateral thinking we seek to brake down complexity into solutions ",
	"Partners",
	"Practice Areas",
];


 const fondoGris = <svg width="414" height="507" viewBox="0 0 414 507" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M0 0H414L230.629 507H0V0Z" fill="#C4C4C4" fillOpacity="0.15"/>
 </svg>
 