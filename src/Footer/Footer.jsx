
import { useState } from 'react';
import DaySwitcher from './DaySwitcher';
import SideBar from './SideBar';


function Footer() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
  <>
            <DaySwitcher setShowSideBar={setShowSideBar}/>
            <SideBar show={showSideBar} handleClose={()=> setShowSideBar(false)}/>
    </>
  );
}

export default Footer;