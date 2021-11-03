import s from "./Profile.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image'

const Profile = ({name, lastname, bio, img}) => {

   const router = useRouter();

   const pushPartner = () => {  
      const fullPath = `/socios/${lastname}`;
      router.push(fullPath);

  }


	return (
      <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOnce={true}
      duration={1}
   >
		<div className={s.container}>
			{/* <img className={s.image} src="./partner1.png"></img> */}
			{/* <div className={s.background_square}>&nbsp</div> */}
			<Image className={s.image} src={img} alt="socio" width="300px" height="300px"></Image>
         

			<div className={s.partner_name_container}>
				<div className={s.partner_name}>{name}</div>
				<div className={s.partner_lastname}> {lastname}</div>
			</div>

			<div className={s.partner_bio}>
         {bio}
         <button className={s.button_secondary} onClick={pushPartner}>{lang=="ESP"?"MAS DETALLE":"MORE DETAIL"}</button>
			</div>
         
		</div>
      </ScrollAnimation>
	);
};

export default Profile;
