import moment from "moment";

export const ELE = 'electricity';
export const GAS = 'gas';
export const CHART = 'chart';
export const TABLE ='table';
export const NOW_TIMESTAMP =moment().startOf('hour').unix();
export const LOW_ELE_PRICE = 120;
export const PERIODS =[
    {
      label: '1d',
      value:1,
    },
    {
      label:'2d',
      value:2,
    },
  ]
  
