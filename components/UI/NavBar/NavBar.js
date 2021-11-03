import {useEffect,useState} from 'react'
import ss from './NavBar.module.scss'
// import Favicon from './Favicon'
import Link from 'next/link'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import useAppContext from '../../../Context/UseAppContext';

import { useRouter } from "next/router";
   



const Form = ({text}) => {

   const {lang} = useAppContext();

   const router = useRouter();

	const goHome = () => {
		const fullPath = `/`;
		router.push(fullPath);
	};

   // useEffect(() => {
   //    changeBackground()
   //    // adding the event when scroll change Logo
   //    window.addEventListener("scroll", changeBackground)
   //  })

   // const changeBackground = () => {

   //    if (window.scrollY >= 60) {
   //      setNavbar(true)
 
   //    } else {
   //       setNavbar(false)
   //    }
   //  }

   return (
      <>
               <div className={ss.back_to_home} onClick={goHome}>
					<span>{miniLogo}</span>
					{/* <span className={ss.minilogo_names}>
						<div>HANG KUCHEN </div>
						<div>SPORDELER <span> &</span> </div>
                  <div>RODRIGUEZ MORALES </div>
					</span> */}
				</div>

         {lang=="ESP"
                ?
                <div className={ss.container}>
                      {/* <div className={ss.link}><Link href="/">                  El Estudio</Link></div> */}
                      <div className={ss.link}><Link href="/institucional">     La Firma</Link></div>
                      <div className={ss.link}><Link href="/areasDePractica">   Areas de Practica</Link></div>
                      <div className={ss.link}><Link href="/socios">            Socios</Link></div>
                      <div className={ss.link}><Link href="/novedades">         Novedades</Link></div>
                      <div className={ss.link}><Link href="/carreras">          Carrera</Link></div>
                      <div className={ss.link}><Link href="/contacto">          Contacto</Link></div>
                  </div>
                  :
                  <div className={ss.container}>
                      {/* <div className={ss.link}><Link href="/">                  Institutional</Link></div> */}
                      <div className={ss.link}><Link href="/institucional">     The Firm</Link></div>
                      <div className={ss.link}><Link href="/areasDePractica">   Practice Areas</Link></div>
                      <div className={ss.link}><Link href="/socios">            Partners</Link></div>
                      <div className={ss.link}><Link href="/novedades">         News</Link></div>
                      <div className={ss.link}><Link href="/carreras">          Carrer</Link></div>
                      <div className={ss.link}><Link href="/contacto">          Contact</Link></div>
                      </div>
                } 



         
         {/* <div className={ss.link}><Link className={ss.link_text} href="/">                    El Estudio</Link></div>
         <div className={ss.link}><Link className={ss.link_text} href="/about">               Nosotros</Link></div>
         <div className={ss.link}><Link className={ss.link_text} href="/blog">                Publicaciones</Link></div>
         <div className={ss.link}><Link className={ss.link_text} href="/contact">              Contacto</Link></div>
         </div>
      */}
      

        
      </>
   );
}

export default Form;

const miniLogo = <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3577 9.53295L20.8378 12.0782L23.9603 15.2321L14.8201 24.4647L5.67975 15.2321L14.8201 5.9997L18.3136 9.52851L20.8334 6.98337L14.8201 0.909234L0.640137 15.2321L14.8201 29.5551L28.9999 15.2321L23.3577 9.53295Z" fill="white"/>
<path d="M23.3841 9.48193L20.8599 6.93235L23.3841 4.38268L25.9082 6.93235L23.3841 9.48193Z" fill="white"/>
</svg>