import * as React from 'react';
import { InputMaskMoney, SliderInputAmount } from '../components';
import { BasicTable } from '../components/tables/BasicTable';
import { Typography } from '@mui/material';



export const ExampleView = () => {
  return (
    <>        
      {/* <Typography variant='h6'> Sliders </Typography>
      <SliderInputAmount></SliderInputAmount>
      <Typography variant='h6'>Tables </Typography> */}
      <BasicTable></BasicTable>      

    </>
  );
};