import { Typography } from '@mui/material';
import { BasicTable, SliderInputAmount } from '../components';
import { DashBoardLayout } from '../layout/DashBoardLayout';


export const SeguridadPage = ({ title ="Seguridad"}) => {
  return (
    <DashBoardLayout>              
        <Typography variant='h6'>{ title }</Typography>
        
    </DashBoardLayout>
  )
}
