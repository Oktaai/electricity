
import { useEffect, useState } from "react";
import { NOW_TIMESTAMP, ELE,GAS } from "../constants";


function Price({electricityPrice, activeEnergy, lastGasPrice}){
    const [currentPrice, setCurrentPrice] = useState(0);
    const [unitOfMeasurement,setUnitOfMeasurement] = useState('');
    useEffect(()=> {
        if(!electricityPrice || !lastGasPrice) return;
        
        const energy={
            [ELE]:{
                data:electricityPrice.ee.find(item => item.timestamp === NOW_TIMESTAMP),
                format:'Sents/kw',
            },
            [GAS]:{
                data:lastGasPrice[0],
                format:'Sents/m³',
            }
        }
        
    
        const {price} = energy[activeEnergy].data;
        const unit = energy[activeEnergy].format;
        
        setCurrentPrice(price);
        setUnitOfMeasurement(unit);
    },[electricityPrice,activeEnergy,lastGasPrice])

    return(
        <>
        <h2>{currentPrice}</h2>
        <div>{unitOfMeasurement}</div>
        </>
    )
}

export default Price;

