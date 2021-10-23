import ss from './index.module.scss'
import Head from 'next/head'
import Profile from '../../components/UI/Profile/Profile'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import Footer from '../../components/Footer/Footer'


const Block = () => {
	return (
		<>
			<Head>
				<title>HSR ABOGADOS</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Socios" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

         <HeaderSub titulo="CARRERA" img="HeaderSub1.png" />

			<div className={ss.container}>
  carreras

            
			</div>
         <Footer/>
		</>
	);
};




export default Block;