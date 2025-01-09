import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { Loading } from '../../components';


export const FormChangePass = ({title}) => {
  const [formData, setFormData] = useState({
    passwordOld: '',
    passwordNew: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [loading, setIsLoading] = useState(false);

  const passwordNewRef = useRef(null); // Reference to passwordNew TextField

  const handlePasswordMatch = () => {

    console.log( "handlePasswordMatch")
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);


    /* simulo para generar una operacion a llamadas  */
    setTimeout(() => {
        // Aquí puedes realizar la lógica de envío de datos o cualquier otra acción
        console.log(formData); 
    
        setIsLoading(false); // Cambiar el estado después de la espera
      }, 2000);
    
    console.log(formData);


  };

  

  return (
    <>
    <Loading open={loading}></Loading>
    
    <Grid container spacing={2}  justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <Typography variant='h6' sx={{textAlign:"center"}}>{title}</Typography>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
            <form onSubmit={handleSubmit}>        
            
                <TextField                 
                    fullWidth
                    variant='outlined'
                    label="Contraseña vieja" 
                    type="password" 
                    placeholder='Escriba aquí'                      
                    name='passwordOld'
                    value={ formData.passwordOld }
                    onChange={handleChange}
                />            
                
                <TextField 
                    sx={{mt:2}}
                    label="Constraseña nueva"
                    fullWidth
                    variant='outlined'
                    id="passwordNew"
                    type={'password'}
                    onChange={handleChange}
                    name="passwordNew"
                    placeholder='Escriba aquí'
                    value={formData.passwordNew}
                    error={formData.passwordNew !== formData.passwordOld}
                    onBlur={handlePasswordMatch} // Check for password match on blur
                    ref={passwordNewRef} // Assign reference
                />
            
            
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt:1}} 
                    disabled=
                        {
                            formData.passwordNew !== formData.passwordOld ||
                            !formData.passwordOld ||
                            !formData.passwordNew

                        }>
                    Cambiar Contraseña
                </Button>
            </form>
        </Grid>
    </Grid>
    </>
    
  );
};


