import Header from "./Header";
import Chart from "./Chart";
import './body.scss';
import { useState, useEffect } from "react";
import {ELE} from "../constants";
import DataTable from "./DataTable";
import { getElectricityPrice, getGasPrice } from "../services/apiService";



function Body({dataType,selectedPeriod}){
    const [activeEnergy, setActiveEnergy] = useState(ELE);
    const [electricityPrice, setElectricityPrice] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);
useEffect(()=> {
getElectricityPrice().then(data=>{
    console.log('ele',data);
    setElectricityPrice(data.data);
});
getGasPrice().then(data=>{
    console.log('gas', data);
    setGasPrice(data.data);

})
},[]);

    return(
        <>
        <Header 
        activeEnergy={activeEnergy} 
        setActiveEnergy={setActiveEnergy}
        />
        {dataType === 'CHART'?
        <Chart activeEnergy={activeEnergy}
        electricityPrice={electricityPrice}
        gasPrice={gasPrice}
        /> : <DataTable electricityPrice={electricityPrice}
        gasPrice={gasPrice}/>}
        
        </>
    )
}

export default Body