import { TextField } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';

export const InputMaskPhone = () => {
  return (
    <TextField 
          id="outlined-basic" 
          label="Número de teléfono" 
          variant="outlined"        
          
          maskChar={null}
          InputProps={{
            inputComponent: InputMask,
            inputProps: { mask: "(99) 999-9999" } 
          }}
        />  
  );
}