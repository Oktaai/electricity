
import { useEffect, useState } from "react";
import { NOW_TIMESTAMP, ELE } from "../constants";


function Price({electricityPrice, activeEnergy, lastGasPrice}){
    const [currentPrice, setCurrentPrice] = useState(0);
    useEffect(()=> {
        if(!electricityPrice) return; 
        
        
     
        const current = electricityPrice.ee.find(item => item.timestamp === NOW_TIMESTAMP);
        
        
        setCurrentPrice(current?.price || 0);
        
    },[electricityPrice])

    return(
        <>
        <h2>{activeEnergy === ELE?currentPrice: parseFloat(lastGasPrice).toFixed(2)}</h2>
        <div>{activeEnergy === ELE?'Sents/kw':'Sents/m3'}</div>
        </>
    )
}

export default Price;

