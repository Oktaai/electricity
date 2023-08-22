import Badge from 'react-bootstrap/Badge';

const price = 'low';

function PriceInfo(){
    return(
        <>
        <h3>Price is:</h3>
        {price === 'low' ? <Badge bg="success">LOW</Badge>:<Badge bg="danger">HIGHT</Badge>}
        
        </>
    )
}

export default PriceInfo;