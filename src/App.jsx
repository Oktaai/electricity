
import './app.scss';
import { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import {CHART, PERIODS} from './constants';



function App() {
  const[dataType, setDataType] = useState(CHART);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value)
  return (
    <Container>
      <Navigation />
      <Body dataType={dataType}
      selectedPeriod={selectedPeriod}/>
      <Footer dataType={dataType} 
      setDataType={setDataType}
      selectedPeriod={selectedPeriod}
      setSelectedPeriod={setSelectedPeriod}/>
    </Container>
  );
}
 

export default App;
