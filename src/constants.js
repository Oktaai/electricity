import moment from "moment";

export const ELE = 'electricity';
export const GAS = 'gas';
export const CHART = 'chart';
export const TABLE ='table';
export const NOW_TIMESTAMP =moment().startOf('hour').unix();
export const LOW_ELE_PRICE = 120;
export const LOW_GAS_PRICE = 30;
const label= {
  [ELE]: 'days',
  [GAS]: 'month'
};
export const PERIODS =[
    {
      label,
      value:1,
    },
    {
      label,
      value:2,
    },
  ]
  
