
import './App.scss';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Header from './Body/Header';
import Chart from './Body/Chart';
import Footer from './Footer/Footer';



function App() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Chart/>
      <Footer/>
    </Container>
  );
}
 

export default App;
