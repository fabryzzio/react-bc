import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const FormProfile = () => {
    const { displayName, email  } = useSelector( state => state.auth ); 
    const [formData, setFormData] = useState({
        name: displayName,
        email: email,
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); 
      };
      
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" > 
      <Grid item xs={6} md={4}> 
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nombre"
                variant="outlined"        
                onChange={ handleChange }
                name="name"
                value={formData.name}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Correo electrónico"
                variant="outlined"
                type="email"        
                onChange={ handleChange }
                name="email"
                fullWidth
                margin="normal"
                value={formData.email}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Guardar 
            </Button>
        </form>
        </Grid>
        
    </Grid>
    
  );
}
