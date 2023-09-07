import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigation(){
    return(
        <Navbar data-bs-theme='dark' className="bg-body-tertiary">
        <Container>
          <Link to='/' className='navbar-brand'>
           
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          
        
        </Container>
      </Navbar>
    )
}

export default Navigation;