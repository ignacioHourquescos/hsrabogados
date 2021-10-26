import s from "./Card.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({ title, content, masDetalle, slug, noticias }) => {
	const router = useRouter();
	const goToNoticia = () => {
		const fullPath = `/novedades/${slug}`;
		router.push(fullPath);
	};

   var maxLength = 160
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
				<div className={s.news_content}>{trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))}...</div>
				{masDetalle ? (
					<div className={s.news_detail} onClick={goToNoticia}>
						MAS DETALLE
					</div>
				) : (
					""
				)}
			</ScrollAnimation>
		</div>
	);
};

export default Card;
