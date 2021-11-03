import s from "./index.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Card from "../../components/UI/Card/Card";
import Footer from "../../components/Footer/Footer";
import useAppContext from '../../Context/UseAppContext';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ContactPeek from '../../components/ContactPeek/ContactPeek'
import {Collapse} from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

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
				<title>HSR - Areas de Práctica</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Areas de Practica" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

			<HeaderSub
				titulo={lang == "ESP" ? "AREAS DE PRACTICA" : "PRACTICE AREAS"}
				img="ofi1.jpg"
			/>

			<div className={s.container}>

				{/* <div className={s.card_container}>
					{loading
						? ""
						: services[0].map((element) => (
								<>
									{showDetail && isMobile ? (
										<div className={s.min_title} onClick={() => setShowDetail(false)}>
											{element.title} <span>+</span>
										</div>
									) : (
										<div className={s.container_card}>
											<div className={s.news_bookmark}></div>
											<div className={s.news_title}>{element.title}</div>
											<div className={s.news_content}>{element.content}</div>
										</div>
									)}
								</>
						  ))}
				</div> */}
            
            <div className={s.card_container}>
					{loading
						? ""
						: 
                   services[0].map((element) => (
								<>
									{showDetail && isMobile ? 
                              <Collapse className={s.collapse_container} key={element.id}>
                                 <Panel  header={element.title}  className={s.min_title} key={element.id}>
										   {/* <div className={s.min_title} onClick={() => setShowDetail(false)}>
											   {element.title} <span>+</span>
										   </div> */}
                                    {/* <div className={s.container_card}> */}
										      	{/* <div className={s.news_bookmark}></div>
										      	<div className={s.news_title}>{element.title}</div> */}
										      	<p className={s.content_element}>{element.content}</p>
										      {/* </div> */}
                                 </Panel>
                              </Collapse>
									 : 
					
                            <Collapse className={s.collapse_container}>
                                 <Panel className={s.min_title} header={element.title} key={element.id}>
										   {/* <div className={s.min_title} onClick={() => setShowDetail(false)}>
											   {element.title} <span>+</span>
										   </div> */}
                                    <div className={s.container_card}>
										      	{/* <div className={s.news_bookmark}></div>
										      	<div className={s.news_title}>{element.title}</div> */}
										      	<div className={s.news_content}>{element.content}</div>
										      </div>
                                 </Panel>
                              </Collapse>
									}
								</>
						  ))
                 
               }
				</div>
			</div>

			<ContactPeek />
			<Footer />
		</>
	);
};

export default Block;

