import s from "./ContactPeek.module.scss";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import Button from "../UI/Button/Button";
import Link from "next/link";
import useAppContext from "../../Context/UseAppContext";
import Image from 'next/image'

const About = () => {
	const { lang } = useAppContext();

	return (
		<div className={s.general_container}>
            <div className={s.overlay}>
            <Image className={s.image} src='/ofi1.jpg'alt="socio" layout="fill"></Image>

            </div>
			<div className={s.title_container}>
				<SectionTitle color="white">{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
			</div>
			<div className={s.master_container}>
            <div className={s.brief}>{lang == "ESP" ? esp[1] : eng[1]}</div>
				<div className={s.brief}>{lang == "ESP" ? esp[2] : eng[2]}</div>
				<div className={s.brief}>{lang == "ESP" ? esp[3] : eng[3]}</div>
				
            {/* <Link href="/contacto"> */}
					<Link href="/">
						<a className={s.button_primary} style={{color:"white",margin:"1rem 0"}}>
							{lang == "ESP" ? esp[4] : eng[4]}
						</a>
					</Link>
              
               {/* <div style={{fontSize:"1.3rem", fontWeight:"bold", marginTop:"2rem"}} className={s.brief}>{lang == "ESP" ? esp[5] : eng[5]}</div> */}
					{/* <Link href="/brochure"> */}
					<Link href="/">
						<a  className={s.button_primary} style={{color:"white"}}>
							{lang == "ESP" ? esp[6] : eng[6]}
						</a>
					</Link>
               <a  className={s.subscribe} style={{color:"white"}}>
							NewsLetter
						</a>
               <div className={s.newsletter_container}>
               <input className={s.newsletter} type="email" name="user_email" placeholder={lang=="ESP"?"Ingrese su mail":"Enter your email"} />
               <span>{lang=="ESP"?"Subscribimre":"Subscribe"}</span>
               </div>

			
			</div>
			{/* <div>{backgorund}</div> */}
		</div>
	);
};

export default About;

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
	"Contacto",
	"Libertad 567, piso 5°, Ciudad Autónoma de Buenos Aires, Argentina",
   "+54 11 6346 2790",
   "contacto@hsrabogados.com",
	"Contacto",
	"Brochure Institucional",
   "Brochure Institucional",
];

const eng = [
	"Contact",
   "Libertad 567, piso 5°, Ciudad Autónoma de Buenos Aires, Argentina",
   "+54 11 6346 2790",
   "contacto@hsrabogados.com",
	"Contact",
	"Institutional Brochure",
	"Institutional Brochure",
];
