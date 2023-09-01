import Badge from 'react-bootstrap/Badge';
import { NOW_TIMESTAMP,LOW_ELE_PRICE, LOW_GAS_PRICE, ELE, GAS } from '../constants';
import { useEffect, useState } from "react";


function PriceInfo({electricityPrice,activeEnergy, lastGasPrice}){
    const [checkPrice, setCheckPrice] = useState(true);
    useEffect(()=> {
        if(!electricityPrice || !lastGasPrice) return;
        
        const energy={
            [ELE]:{
                data:electricityPrice.ee.find(item => item.timestamp === NOW_TIMESTAMP),
                lowPrice:[LOW_ELE_PRICE],
            },
            [GAS]:{
                data:lastGasPrice[0],
                lowPrice:LOW_GAS_PRICE,
            }
        }
        
    
        const {price} = energy[activeEnergy].data;
        const check = price<=energy[activeEnergy].lowPrice;
        
        setCheckPrice(check);
        
    },[electricityPrice,activeEnergy,lastGasPrice])
    
    
    
    return(
        <>
        <h3>Price is:</h3>
        {checkPrice 
         ? <Badge bg="success">LOW</Badge>:
         <Badge bg="danger">HIGHT</Badge>}
        
        </>
    )
} 

export default PriceInfo;