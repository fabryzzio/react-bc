
import { Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';
import { ExampleView } from '../views';

export const DashBoardPage = ( {title = "Dashboard "}) => {
  return (
    <DashBoardLayout>            
      <Typography variant='h6'>{ title }</Typography>
      <ExampleView></ExampleView>
    </DashBoardLayout>
  )
}
