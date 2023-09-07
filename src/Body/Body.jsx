import Header from "./Header";
import Chart from "./Chart";
import './body.scss';
import { useState, useEffect } from "react";
import { CHART} from "../constants";
import DataTable from "./DataTable";
import ErrorModal from "./ErrorModal";
import { getElectricityPrice, getGasPrice, getGasCurrentPrice} from "../services/apiService";
import { setElectricityPrice,  setGasPrice, setGasCurrentPrice } from "../services/stateService";
import { useDispatch,useSelector } from "react-redux";




function Body(){
    const dataType = useSelector((state)=>state.dataType);
    const selectedPeriod = useSelector((state)=>state.selectedPeriod);
    const dispatch = useDispatch();
    
    const [errorMessage, setErrorMessage] = useState(null);
useEffect(()=> {
    
    getElectricityPrice({selectedPeriod}).then(data=>{
            console.log('ele',data);
            if(!data.success){
                throw data.messages[0];
            }
           dispatch( setElectricityPrice(data.data));
})
.catch(setErrorMessage);
    getGasPrice({selectedPeriod}).then(data=>{
            console.log('gas', data);
            if(!data.success){
                throw data.messages[0];
            }
           dispatch( setGasPrice(data.data));

})
.catch(setErrorMessage);
},[selectedPeriod, dispatch]);

useEffect(()=> {
    getGasCurrentPrice().then(data=>{
        console.log('lastGas',data);
        if(!data.success){
            throw data.messages[0];
        }
dispatch(setGasCurrentPrice (data.data[0].price));
    })
    .catch(setErrorMessage);
        

},[dispatch]);


    return(
        <>
        <Header/>
        {dataType === CHART?
        <Chart/> : <DataTable />}
        <ErrorModal errorMessage={errorMessage} 
        handleClose = {() => setErrorMessage(null)}
        />
        </>
    )
}

export default Body