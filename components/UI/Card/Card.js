import s from "./Card.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Link from "next/link";
import { useRouter } from "next/router";
import useAppContext from '../../../Context/UseAppContext';

const Card = ({ title, content, masDetalle, slug, noticias, trim }) => {
	const router = useRouter();
	const { lang } = useAppContext();
	const goToNoticia = () => {
		const fullPath = `/novedades/${slug}`;
		router.push(fullPath);
	};

   var maxLength = 140
   var trimmedString = content.substr(0, maxLength);

	return (
		<div className={s.container}>
			<ScrollAnimation
				animateIn="animate__fadeIn"
				animateOnce={true}
				duration={1}
			>
				<div className={s.news_bookmark}></div>
				<div className={s.news_title}>{title}</div>
				<div className={s.news_content}>{trim?trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))):content}...</div>
				{masDetalle ? (
					<div className={s.news_detail} onClick={goToNoticia}>
						{lang=="ESP"? 'MAS DETALLE' : 'SEE MORE'}
					</div>
				) : (
					""
				)}
			</ScrollAnimation>
		</div>
	);
};

export default Card;