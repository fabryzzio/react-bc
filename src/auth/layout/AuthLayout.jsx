import { Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children, title = 'default' }) => {
  return (
    <>
    <Grid item 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh',  backgroundImage: 'linear-gradient(45deg,  #065CD7, #4FFFFF)',
        backgroundSize: 'cover', padding: 4 }}
    >
      
      <Grid item className='box-shadow'       
       sx={{ 
            width: { xs: 360, sm:  360, md: 420, lg: 460, lx: 550  },            
            backgroundColor: 'background.default', 
            padding: 5, 
            borderRadius: 2 
        }}
        >
        {/*Componente renderizado para auth*/}
        { children }
      </Grid>

      <Grid container direction='row' justifyContent='center' spacing={1}>
            <Typography sx={{
              color: 'white',
              padding: '16px',
              fontWeight: 'bold'
            }} >By BeClever </Typography>
      </Grid>

    </Grid>
    
          
    </>

  )
}
