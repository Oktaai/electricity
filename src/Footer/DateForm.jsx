import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getElectricityPrice, getGasPrice } from '../services/apiService';
import { useState } from 'react';
import ErrorModal from '../Body/ErrorModal';
import { setElectricityPrice,setGasPrice } from '../services/stateService';
import { useDispatch } from 'react-redux';

function DateForm({



hideSideBar
}) {
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage]=useState(null);

const handleSubmit = async (event) => {
  event.preventDeafoult();

  const from = event.target.from.value;
  const to = event.target.to.value;
try{
  const [dataEle, dataGas] = new Promise.all([
    getElectricityPrice({to,from}),
    getGasPrice({to,from}),
  ]);

  if(![dataEle, dataGas].find(data => data.success)){
    throw (dataEle||dataGas).messages[0];
  }
  dispatch(setElectricityPrice(dataEle.data));

  dispatch(setGasPrice(dataGas.data));

}catch(error){
  setErrorMessage(error);
}

};

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>From</Form.Label>
        <Form.Control type="date" name = "from" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>To</Form.Label>
        <Form.Control type="date" name="to"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
     <ErrorModal errorMessage={errorMessage} 
     handleClose = {() => setErrorMessage(null)}/>
     </>
  );
}

export default DateForm;