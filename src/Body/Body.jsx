import Header from "./Header";
import Chart from "./Chart";
import './body.scss';
import { useState } from "react";
import {ELE} from './constants';


function Body(){
    const [activeEnergy, setActiveEnergy] = useState(ELE);
    return(
        <>
        <Header 
        activeEnergy={activeEnergy} 
        setActiveEnergy={setActiveEnergy}
        />
        <Chart activeEnergy={activeEnergy}/>
        </>
    )
}

export default Body