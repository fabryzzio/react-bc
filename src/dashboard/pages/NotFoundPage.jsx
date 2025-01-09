import { Grid, Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';


export const NotFoundPage = ( {title = 'Recurso no encontrado ... ', error = '404'}) => {
  return (
    <DashBoardLayout>           
      <Grid 
        container 
        spacing={0} 
        direction="column" 
        alignItems="center" 
        justifyContent="center" 
        style={{ minHeight: 'calc(100vh - 200px)' }} 
      > 
        <Grid item xs={12}>
          <Typography variant='h2'>Error: {error} </Typography>
          <Typography variant='h4'>{title}</Typography> 
        </Grid>
      </Grid>          
        
    </DashBoardLayout>
  )
}
