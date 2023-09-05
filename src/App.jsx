
import './app.scss';
import { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import {CHART, PERIODS, ELE} from './constants';



function App() {
  const[dataType, setDataType] = useState(CHART);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value)
  const [activeEnergy, setActiveEnergy] = useState(ELE);
  const [electricityPrice, setElectricityPrice] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  const [lastGasPrice, setLastGasPrice] = useState(0);
  return (
    <Container>
      <Navigation />
      <Body dataType={dataType}
      selectedPeriod={selectedPeriod}
      setActiveEnergy={setActiveEnergy}
      activeEnergy={activeEnergy}
      electricityPrice={electricityPrice}
      setElectricityPrice={setElectricityPrice}
      gasPrice={gasPrice}
      setGasPrice={setGasPrice}
      lastGasPrice={lastGasPrice}
    setLastGasPrice={setLastGasPrice}
      
      />
      


      
      <Footer dataType={dataType} 
      setDataType={setDataType}
      selectedPeriod={selectedPeriod}
      setSelectedPeriod={setSelectedPeriod}
      activeEnergy={activeEnergy}/>
    </Container>
  );
}
 

export default App;
