
import { Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';
import { BasicTable, SliderInputAmount } from '../components';
import { Loading } from '../../components';

export const ComponentsPage = ( {title = "Components"}) => {
  return (
    <DashBoardLayout>            
      <Typography variant='h6'>{ title }</Typography>
      
      <SliderInputAmount></SliderInputAmount>
      <BasicTable></BasicTable>
      
    </DashBoardLayout>
  )
}
