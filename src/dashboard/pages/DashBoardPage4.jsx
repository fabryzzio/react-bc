import { Typography } from '@mui/material';
import { BasicTable } from '../components';
import { DashBoardLayout } from '../layout/DashBoardLayout';


export const DashBoardPage4 = ( {title = 'Dashborad 4'}) => {
  return (
    <DashBoardLayout>              
        <Typography variant='h6'>{ title }</Typography>
        <BasicTable></BasicTable> 
    </DashBoardLayout>
  )
}
