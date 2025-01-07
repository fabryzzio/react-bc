import { Typography } from '@mui/material';
import { SliderInputAmount } from '../components';
import { DashBoardLayout } from '../layout/DashBoardLayout';


export const DashBoardPage2 = ({ title ="Dashboard 2"}) => {
  return (
    <DashBoardLayout>              
        <Typography variant='h6'>{ title }</Typography>   
        <SliderInputAmount></SliderInputAmount>
    </DashBoardLayout>
  )
}
