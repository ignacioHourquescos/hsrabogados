import {  useState } from 'react';

import BurgerMenu from './BurgerMenu';
import SideBar from './SideBar';


const Layout = (props) => {
   const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

   const drawerToggleClickHandler = () =>{
        setSideDrawerOpen((prevState)=>{
            setSideDrawerOpen(!prevState.sideDrawerOpen); 
        })
   }

   const closeMenu = () => {
        setSideDrawerOpen(false);
   }

   return (
   <>
      <BurgerMenu drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideBar click={closeMenu} show={sideDrawerOpen}/> 
   </>
  );
  
}

export default Layout;
