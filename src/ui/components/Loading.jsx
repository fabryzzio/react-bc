import { Backdrop, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react';

//export const Loading = ({open, setOpen}) => {
export const Loading = ({open= false, title = 'Por favor espere ... ' , subtitle = 'Esta operación puede demorar ' }) => {
    
    
  return (
    <>
        <Backdrop
        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        // onClick={handleClose}
      >
        <Grid container 
         direction="column"
         alignItems="center"
         justifyContent="center"  
         sx={{ width:450, height:280,  backgroundColor: "#FFF", borderRadius:1, borderTop:10, borderColor: "#D0D0D8", textAlign: "center"}}>
            <Grid item>
                <CircularProgress size={64} color="info" sx={{m:2}} />                
            </Grid>
            <Grid item >
                <Typography variant='h6' fontWeight="bold">{title}</Typography>            
                <Typography variant='h7' align='center'>{subtitle}</Typography>
            </Grid>
        </Grid>
        
      </Backdrop>
    </>
  )
}
