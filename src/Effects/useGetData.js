import { useEffect } from "react";
import { getElectricityPrice,getGasPrice,getGasCurrentPrice } from "../services/apiService";
import { setElectricityPrice,setGasCurrentPrice,setGasPrice,setErrorMessage } from "../services/stateService";
import { useSelector, useDispatch } from "react-redux";




const useGetData =  () => {
    const selectedPeriod = useSelector((state)=>state.selectedPeriod);
    const dispatch = useDispatch();
    
useEffect(()=> {
    
    getElectricityPrice({selectedPeriod}).then(data=>{
            console.log('ele',data);
            if(!data.success){
                throw data.messages[0];
            }
           dispatch( setElectricityPrice(data.data));
})
.catch((error)=>dispatch(setErrorMessage(error)));
    getGasPrice({selectedPeriod}).then(data=>{
            console.log('gas', data);
            if(!data.success){
                throw data.messages[0];
            }
           dispatch( setGasPrice(data.data));

})
.catch((error)=>dispatch(setErrorMessage(error)));
},[selectedPeriod, dispatch]);

useEffect(()=> {
    getGasCurrentPrice().then(data=>{
        console.log('lastGas',data);
        if(!data.success){
            throw data.messages[0];
        }
dispatch(setGasCurrentPrice (data.data[0].price));
    })
    .catch((error)=>dispatch(setErrorMessage(error)));
        

},[dispatch]);

}

export default useGetData;