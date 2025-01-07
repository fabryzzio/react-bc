import { Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';


export const NotFoundPage = ( {title = 'Dashborad 4'}) => {
  return (
    <DashBoardLayout>              
        <Typography variant='h6'>{ title }</Typography>
        <Typography variant='h2'>Página no encontrada ... </Typography> 
    </DashBoardLayout>
  )
}
