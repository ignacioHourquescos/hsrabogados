import s from "./About.module.scss";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import Link from "next/link";
import useAppContext from "../../Context/UseAppContext";

const About = () => {
	const { lang } = useAppContext();

	return (
		<div className={s.general_container}>

			<div className={s.title_container}>
				<SectionTitle color="black">{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
			</div>
			<div className={s.master_container}>
				<div className={s.brief}>{lang == "ESP" ? esp[1] : eng[1]}</div>
				<div className={s.button_container}>
            {/* <Link href="/socios"> */}
					<Link href="/">
						<a className={s.button_primary}>
							{lang == "ESP" ? esp[2] : eng[2]}
						</a>
					</Link>
					{/* <Link href="/areasDePractica"> */}
					<Link href="/">
						<a className={s.button_primary}>
							{lang == "ESP" ? esp[3] : eng[3]}
						</a>
					</Link>
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
	"Nosotros",
	"Somos una firma de abogados jovenes y de amplia trayectoria. A través\
  del pensamiento lateral buscamos soluciones alternativas a situaciones\
  complejas.",
	"Socios",
	"Areas de Práctica",
];

const eng = [
	"About Us",
	"We are a law firm, of young people and recongized experience. Driven by out of the box solutions\
   and lateral thinking we seek to brake down complexity into solutions ",
	"Partners",
	"Practice Areas",
];


 const fondoGris = <svg width="414" height="507" viewBox="0 0 414 507" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M0 0H414L230.629 507H0V0Z" fill="#C4C4C4" fillOpacity="0.15"/>
 </svg>
 