import {useEffect,useState} from 'react'
import s from './TopColorBar.module.scss'
import { useRouter } from "next/router";

const Form = ({text}) => {
   const [Navbar, setNavbar] = useState(false)
   const router = useRouter();

	const goHome = () => {
		const fullPath = `/`;
		router.push(fullPath);
	};

   useEffect(() => {
      changeBackground()
      // adding the event when scroll change Logo
      window.addEventListener("scroll", changeBackground)
    })

   const changeBackground = () => {

      if (window.scrollY >= 60) {
        setNavbar(true)
 
      } else {
         setNavbar(false)
      }
    }

   return (
      <>
      {
         Navbar
         ?
         <>
        
         <div className={s.container} style={{backgroundColor:"black"}}>
         <div className={s.back_to_home} onClick={goHome}>
					<span>{miniLogo}</span>
					<span className={s.minilogo_names}>
						<div>HANG KUCHEN </div>
						<div>SPORDELER <span> &</span> </div>
                  <div>RODRIGUEZ MORALES </div>
					</span>
				</div>
         </div>
         </>

         :
         <div className={s.container}>

         
         
         </div>
      }

        
      </>
   );
}

export default Form;

const logoRedIcon = <svg width="82" height="83" viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.3982 24.8256L58.1443 32.1527L67.1331 41.2322L40.8206 67.8104L14.5078 41.2322L40.8206 14.6542L50.8777 24.8128L58.1316 17.486L40.8206 0L0 41.2322L40.8206 82.4644L81.6409 41.2322L65.3982 24.8256Z" fill="#AF1B26"/>
<path d="M65.4741 24.6787L58.2075 17.3391L65.4741 9.9992L72.7404 17.3391L65.4741 24.6787Z" fill="#F9303E"/>
</svg>

const miniLogo = <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3577 9.53295L20.8378 12.0782L23.9603 15.2321L14.8201 24.4647L5.67975 15.2321L14.8201 5.9997L18.3136 9.52851L20.8334 6.98337L14.8201 0.909234L0.640137 15.2321L14.8201 29.5551L28.9999 15.2321L23.3577 9.53295Z" fill="white"/>
<path d="M23.3841 9.48193L20.8599 6.93235L23.3841 4.38268L25.9082 6.93235L23.3841 9.48193Z" fill="white"/>
</svg>