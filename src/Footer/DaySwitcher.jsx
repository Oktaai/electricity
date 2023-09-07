import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { PERIODS } from '../constants';
import { useSelector,useDispatch } from 'react-redux';
import { setSelectedPeriod } from '../services/stateService';



function Periods({setShowSideBar}) {
  const selectedPeriod = useSelector((state)=>state.selectedPeriod)
  const activeEnergy = useSelector((state)=>state.activeEnergy);
  const dispatch = useDispatch();
    
    return(
    <Container className='text-center my-2'>
     {PERIODS.map(({label,value}) => 
     <Button 
        className='mx-2'
        key={value} 
        variant='primary'
        active={selectedPeriod === value}
        onClick={() => dispatch(setSelectedPeriod(value))}
        >
        {value}{label[activeEnergy]}
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