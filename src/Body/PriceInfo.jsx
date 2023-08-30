import Badge from 'react-bootstrap/Badge';
import moment from 'moment';


function PriceInfo({electricityPrice}){
    const now = moment().startOf('hour').unix();
    const price = electricityPrice?.ee.map(item => item.timestamp === now? item.price:null);
    let sum = 0;
    electricityPrice?.ee.map(item => sum+=item.price); 
    const average = sum / electricityPrice?.ee.length;
    
    return(
        <>
        <h3>Price is:</h3>
        {average >= price ? <Badge bg="success">LOW</Badge>:<Badge bg="danger">HIGHT</Badge>}
        
        </>
    )
} 

export default PriceInfo;