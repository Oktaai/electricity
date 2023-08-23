import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';

function HeaderInfoFooter(){
    const [checked, setChecked] = useState(false);

    return(
<Container>
    <Row>
        <Col>
    <h2>I want to use:</h2>
    </Col>
    <Col>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        before morning
      </ToggleButton>
      </Col>
      </Row>
      </Container>
    )

}
    
    
   


export default HeaderInfoFooter;
