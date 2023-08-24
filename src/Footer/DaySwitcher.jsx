import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const periods =[
  {
    label: '1d'
  },
  {
    label:'2d'
  },
  {
    label:'3d'
  },
  {
    label:'4d'
  },
  {
    label:'6d'
  },
  {
    label:'8d'
  },
]

function Periods({setShowSideBar}) {
    const [selected, setSelected] = useState(periods[0].label);
  
    
    return(
    <Container className='text-center my-2'>
     {periods.map(({label}) => 
     <Button 
        className='mx-2'
        key={label} 
        variant='primary'
        active={selected === label}
        onClick={() => setSelected(label)}
        >
        {label}
     </Button> 
     )}
     <Button 
     className='mx-2'
     variant='primary'
     onClick={() => setShowSideBar(true)}
     >Custom</Button>
    </Container>
  );
}

export default Periods;

// <Button 
// variant="outline-warning"
// onClick={()=> setActiveButton('first')} 
// active={activeButton === 'first'}
// >1d</Button>{' '}
// <Button 
// variant="outline-warning"
// onClick={()=> setActiveButton('second')} 
// active={activeButton === 'second'}
// >2d</Button>{' '}
// <Button 
// variant="outline-warning"
// onClick={()=> setActiveButton('third')} 
// active={activeButton === 'third'}
// >3d</Button>{' '}
// <Button 
// variant="outline-warning"
// onClick={()=> setActiveButton('fourth')} 
// active={activeButton === 'fourth'}
// >4d</Button>{' '}
// <Button 
// variant="outline-warning"
// onClick={()=> setActiveButton('fifth')} 
// active={activeButton === 'fifth'}
// >6d</Button>