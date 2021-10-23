import s from "./Button.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";


const Button = ({ children }) => {
	return (
  
		<a >
          
			{children}
    
		</a>

	);
};

export default Button;
