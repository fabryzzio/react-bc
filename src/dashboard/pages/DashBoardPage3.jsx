import { Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';
import { BasicTable } from '../components';


export const DashBoardPage3 = ({ title = "Dashboard 3"}) => {
  return (
    <DashBoardLayout>         
      <Typography variant='h6'>{ title }</Typography>     
      <BasicTable></BasicTable>            
    </DashBoardLayout>
  )
}
