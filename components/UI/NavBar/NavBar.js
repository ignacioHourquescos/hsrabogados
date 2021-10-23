import {useEffect,useState} from 'react'
import ss from './NavBar.module.scss'
// import Favicon from './Favicon'
import Link from 'next/link'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import useAppContext from '../../../Context/UseAppContext';


   



const Form = ({text}) => {

   const {lang} = useAppContext();

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

         {lang=="ESP"
                ?
                <div className={ss.container}>
                      {/* <div className={ss.link}><Link href="/">                  El Estudio</Link></div> */}
                      <div className={ss.link}><Link href="/institucional">     Institucional</Link></div>
                      <div className={ss.link}><Link href="/areasDePractica">   Areas de Practica</Link></div>
                      <div className={ss.link}><Link href="/socios">            Socios</Link></div>
                      <div className={ss.link}><Link href="/novedades">         Novedades</Link></div>
                      <div className={ss.link}><Link href="/carreras">          Carreras</Link></div>
                      <div className={ss.link}><Link href="/contacto">          Contacto</Link></div>
                  </div>
                  :
                  <div className={ss.container}>
                      {/* <div className={ss.link}><Link href="/">                  Institutional</Link></div> */}
                      <div className={ss.link}><Link href="/institutional">     Institucional</Link></div>
                      <div className={ss.link}><Link href="/areasDePractica">   Practice Areas</Link></div>
                      <div className={ss.link}><Link href="/socios">            Partners</Link></div>
                      <div className={ss.link}><Link href="/novedades">         Latest News</Link></div>
                      <div className={ss.link}><Link href="/carreras">          carrers</Link></div>
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