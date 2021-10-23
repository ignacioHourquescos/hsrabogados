import s from "./SectionTitle.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const SectionTitle = ({ children, color }) => {
	return (
		<div className={s.container}>
      
			<div className={s.svg_container}>
         <ScrollAnimation
					animateIn="animate__fadeInLeft"
					animateOnce={true}
					duration={1}
				>
					<div className={s.arrow}>{arrow2}</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="animate__fadeInRight"
					animateOnce={true}
					duration={1.5}
				>
					<div className={s.arrow}>{arrow}</div>
				</ScrollAnimation>

			</div>
			<ScrollAnimation
				animateIn="animate__fadeIn"
				animateOnce={true}
				duration={3}
			>
         {color=="black"?
         <h2 className={s.title_section}>{children}
            </h2>
         :
         <h2 className={s.title_section2}>{children}
            </h2>
         }
				
			</ScrollAnimation>

         <ScrollAnimation
					animateIn="animate__tada"
					animateOnce={false}
					duration={3}
					offset={200}
				>
					<div className={s.square}>{square}</div>
				</ScrollAnimation>
	

		</div>
	);
};

export default SectionTitle;

const square = (
	<svg
		width="13"
		height="13"
		viewBox="0 0 13 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			y="7.5896"
			width="9"
			height="9"
			transform="rotate(-47.0692 0 6.5896)"
			fill="#F9313E"
         // fill="#AEA1A2"
		/>
	</svg>
);

const arrow = (
	<svg
		width="19"
		height="37"
		viewBox="0 0 19 37"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.162652 36.5784L0.162652 29.0791L10.9807 17.345L0.162653 7.57912L0.162899 0.079088L17.9806 17.345L0.162652 36.5784Z"
         fill="#AF1b27"
			fillOpacity="0.80"
			// fillOpacity="1"
		/>
	</svg>
);

const arrow2 = (
	<svg
		width="18"
		height="37"
		viewBox="0 0 18 37"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.9846 0.0396881L17.9512 7.53889L7.08096 19.2247L17.8553 29.0387L17.8217 36.5386L0.0810547 19.1934L17.9846 0.0396881Z"
			fill="#AF1b27"
			fillOpacity="0.38"
			// fillOpacity="1"
		/>
	</svg>
);

