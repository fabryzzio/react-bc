
import { Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';



export const HomePage = ( {title = "Home"}) => {
  return (
    <DashBoardLayout>            
      <Typography variant='h6'>{ title }</Typography>    
      
    </DashBoardLayout>
  )
}
