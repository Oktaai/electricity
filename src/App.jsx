
import './app.scss';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import ErrorModal from './ErrorModal';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';
import useGetData from './Effects/useGetData';



function App() {

useGetData();

  const mainPage = (
    <>
    <Body/>
    <Footer/>
    </>
  );
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={mainPage}/>
        <Route path="/electricity" element={mainPage}/>
        <Route path="/electricity/:dataType" element={mainPage}/>
        <Route path="/gas" element={mainPage}/>
        <Route path="/gas/:dataType" element={mainPage}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <ErrorModal/>
    </Container>
  );
}
 

export default App;
