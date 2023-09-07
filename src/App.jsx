
import './app.scss';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Body from './Body/Body';



function App() {
  return (
    <Container>
      <Navigation />
      <Body/>
      <Footer/>
    </Container>
  );
}
 

export default App;
