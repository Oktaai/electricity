import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import moment from 'moment';
import React, {useState,useEffect} from 'react';
import { NOW_TIMESTAMP, ELE, GAS} from '../constants';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


function Chart() {
  const gasPrice = useSelector((state)=>state.gasPrice);
  const electricityPrice = useSelector((state) => state.electricityPrice);
  const activeEnergy = useSelector((state)=> state.activeEnergy);
  const [chartData, setChartData] = useState([]);

    useEffect(()=>{
      if(!electricityPrice || !gasPrice) return;

      const energy = {
        [ELE]: {
          data:electricityPrice.ee,
          format:'HH',
        },
        [GAS]: {
        data:gasPrice.common,
        format:'DD',
        }
      }
      const data = energy[activeEnergy].data.map(data=> 
        ({
          ...data, 
          interval: parseInt(moment
                .unix(data.timestamp)
                .format(energy[activeEnergy].format))
              })
              )
      
      setChartData(data);
    },[electricityPrice,gasPrice,activeEnergy]);
    return (
          <div className='chartContainer'>
            <ResponsiveContainer height="100%" width="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="interval" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
              <ReferenceLine x={chartData.findIndex(({timestamp}) => timestamp === NOW_TIMESTAMP)} stroke={'red'}/>
            </LineChart>
            </ResponsiveContainer>
            </div>
    );
  }

  export default Chart;
 