import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function DaySwitcher() {
    const [activeButton, setActiveButton] = useState('first');
  return (
    <>
      <Button 
      variant="outline-warning"
      onClick={()=> setActiveButton('first')} 
      active={activeButton === 'first'}
      >1d</Button>{' '}
      <Button 
      variant="outline-warning"
      onClick={()=> setActiveButton('second')} 
      active={activeButton === 'second'}
      >2d</Button>{' '}
      <Button 
      variant="outline-warning"
      onClick={()=> setActiveButton('third')} 
      active={activeButton === 'third'}
      >3d</Button>{' '}
      <Button 
      variant="outline-warning"
      onClick={()=> setActiveButton('fourth')} 
      active={activeButton === 'fourth'}
      >4d</Button>{' '}
      <Button 
      variant="outline-warning"
      onClick={()=> setActiveButton('fifth')} 
      active={activeButton === 'fifth'}
      >6d</Button>
    </>
  );
}

export default DaySwitcher;