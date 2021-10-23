import ss from './LanguageSwitch.module.scss'
import useAppContext from '../../Context/UseAppContext';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const LanguageSwitch = () => {
   const {  displayEspañol, displayIngles, lang} = useAppContext();


   return (
      <>
         <div className={ss.container}>
         {
            lang=="ESP"
            ?
            <button onClick={() => displayIngles()}>ENG</button>
            :
            <button onClick={() => displayEspañol()}>ESP</button>
         }
         </div>

      </>
   )
}


export default LanguageSwitch
/* 

const arrowDown = <svg width="25" height="55" viewBox="0 0 75 130" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M33.9789 127.554C35.9394 129.499 39.1052 129.486 41.0499 127.525L72.7401 95.5766C74.6847 93.616 74.6719 90.4502 72.7113 88.5056C70.7508 86.5609 67.585 86.5738 65.6403 88.5343L37.4713 116.933L9.07225 88.7642C7.11171 86.8196 3.94591 86.8324 2.00124 88.793C0.0565711 90.7535 0.0694397 93.9193 2.02998 95.864L33.9789 127.554ZM32 1.02032L32.5 124.025L42.5 123.984L42 0.979676L32 1.02032Z" fill="#E4E4E4" />
</svg> */


const arrowDown =  <div className={ss.mouse_scroll}>
<div>
   <span className={`${ss.m_scroll_arrows} ${ss.unu}`}></span>
   <span className={`${ss.m_scroll_arrows} ${ss.doi}`}></span>
   <span className={`${ss.m_scroll_arrows} ${ss.trei}`}></span>
</div>
</div>


