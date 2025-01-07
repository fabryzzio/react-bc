import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';


export const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {    
    event.preventDefault();    
    // Redirect route
    navigate('/success-forgot-password/');
  };
  return (
    <AuthLayout title="Olvide mi contraseña">
      <form>
          <Grid container>   
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='mi@correo.com' 
                fullWidth
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button variant='contained' fullWidth onClick={handleSubmit}>
                  Enviar
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Volver
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
