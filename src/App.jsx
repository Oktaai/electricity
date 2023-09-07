
import './app.scss';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import ErrorModal from './ErrorModal';



function App() {
  return (
    <Container>
      <Navigation />
      <Body/>
      <Footer/>
      <ErrorModal/>
    </Container>
  );
}
 

export default App;
