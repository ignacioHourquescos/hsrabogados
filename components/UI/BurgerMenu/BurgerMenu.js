import ss from './BurgerMenu.module.scss';

const BurgerMenu = props => {



  	return (
      <header className={ss.toolbar}>
         <button className={ss.burgerIcon} onClick={props.drawerToggleClickHandler}>
            {burger}
         </button> 
      </header>
   );
}

export default BurgerMenu;



const burger = 
   <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="26" height="2" fill="white"/>
      <rect width="26" height="2" fill="white"/>
      <rect x="5" y="8" width="21" height="2" fill="white"/>
      <rect x="9" y="16" width="17" height="2" fill="white"/>
   </svg>

