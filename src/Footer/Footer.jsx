
import { useState } from 'react';
import DaySwitcher from './DaySwitcher';
import SideBar from './SideBar';
import TableSwitcher from './TableSwitcher';


function Footer(props) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
  <>
            <TableSwitcher {...props}/>
            <DaySwitcher setShowSideBar={setShowSideBar} {...props}/>
            <SideBar show={showSideBar} handleClose={()=> setShowSideBar(false)}/>
    </>
  );
}

export default Footer;