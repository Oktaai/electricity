import Table from 'react-bootstrap/Table';
import moment from 'moment';

function DataTable({electricityPrice}) {
  const now = moment().startOf('hour').unix();

  const data = electricityPrice?.ee.map((priceEE, index) => {
    return{
      ee: priceEE,
      lv: electricityPrice?.lv[index],
      fi: electricityPrice?.fi[index],
      lt: electricityPrice?.lt[index],
    }
  })
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Estonia</th>
          <th>Finland</th>
          <th>Lituania</th>
          <th>Latvia</th>
        </tr>
      </thead>
      <tbody>
       {data.map(({ee, lt, lv, fi},index) => (
        <tr className={ ee.timestamp === now ?  "activeline" :null}  key={index} >
          <td>{index}</td>
          <td>{moment.unix(ee.timestamp).format('DD.MM.YYYY HH:mm:ss')}</td>
          <td>{ee.price}</td>
          <td>{fi.price}</td>
          <td>{lt.price}</td>
          <td>{lv.price}</td>
        </tr>
       ))}
      </tbody>
    </Table>
  );
}

export default DataTable;

