import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import {CHART, TABLE} from '../constants';
import {setDataType} from "../services/stateService";
import { useDispatch, useSelector } from 'react-redux';


function TableSwitcher(){
  const dataType = useSelector((state)=>state.dataType);
  const dispatch = useDispatch();
    return(
            <Container className='text-center my-2'>
          <Form.Check
            inline
            label="Chart"
            name="group1"
            type="radio"
            id={`inline-1`}
            onClick={() => dispatch(setDataType(CHART))}
            defaultChecked={dataType === CHART}
          />
          <Form.Check
            inline
            label="Table"
            name="group1"
            type="radio"
            id={`inline-2`}
            onClick={() => dispatch(setDataType(TABLE))}
          />
          </Container>
          

    );
}

export default TableSwitcher;