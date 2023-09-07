import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { CHART, TABLE } from '../constants';
import { setDataType } from "../services/stateService";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function TableSwitcher() {
  const dataType = useSelector((state) => state.dataType);
  
  const dispatch = useDispatch();

  const { dataType: dataTypeParam } = useParams();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (dataTypeParam === 'table') {
      dispatch(setDataType(TABLE));
    } else {
      dispatch(setDataType(CHART));
    }
  }, [dataTypeParam, dispatch]);

  const handleChart = () => {
    navigate((pathname.includes('/gas') ? '/gas' : '/electricity') + '/chart');
  }

  const handleTable = () => {
    navigate((pathname.includes('/gas') ? '/gas' : '/electricity') + '/table');
  }

  return (
    <Container className='text-center my-2'>
      <Form.Check
        inline
        label="Chart"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={handleChart}
        checked={dataType === CHART}
      />
      <Form.Check
        inline
        label="Table"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={handleTable}
        checked={dataType === TABLE}
      />
    </Container>


  );
}

export default TableSwitcher;