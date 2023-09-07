
import { useState } from 'react';
import DaySwitcher from './DaySwitcher';
import SideBar from './SideBar';
import TableSwitcher from './TableSwitcher';


function Footer() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
  <>
            <TableSwitcher />
            <DaySwitcher setShowSideBar={setShowSideBar} />
            <SideBar show={showSideBar} handleClose={()=> setShowSideBar(false)} />
    </>
  );
}

export default Footer;