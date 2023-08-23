import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DaySwitcher from './DaySwitcher';
import HeaderInfoFooter from './HeaderOfFooter';
import Timer from './Timer';
import BetterTimeInfo from './BetterTimeInfo';

function Footer() {
  return (
    <Container >
        <Row className="justify-content-md-center">
            <Col md="auto">
            <HeaderInfoFooter/>
            </Col>
        </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
            <DaySwitcher/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
            <BetterTimeInfo/> 
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
            <Timer/>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;