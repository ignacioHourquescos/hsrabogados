import React, { useRef } from 'react';
import s from './Contact.module.scss'
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import emailjs from 'emailjs-com';
import useAppContext from '../../Context/UseAppContext';


export default function Referals() {
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

      <div className={s.container}>
         <SectionTitle>{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
         <form className={s.form} ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input className={s.campo} type="text" name="user_name" />
            <label>Email</label>
            <input className={s.campo} type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea className={s.campo} name="message" />
            <input className={s.enviar} type="submit" value="Send" />
         </form>
      </div>

   )
}

const esp = [
   "Contactanos"
]

const eng = [
   "Contact Us"
]

