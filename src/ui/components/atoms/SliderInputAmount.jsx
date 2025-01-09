import * as React from 'react';
import { FormControl,  Grid,  InputAdornment, InputLabel, OutlinedInput, Slider, Typography, Box} from '@mui/material';

import { useState } from 'react';

export const SliderInputAmount = ( {max = 1000, min = 0 }) => {

  /* Campo de texto */
  const [valueInput, setValue] = useState("");
  
  /* Slider */
  const [sliderValue, setSliderValue] = useState( min );

  /* Evento */
  const onHandlerInput = (event) => {

    let newValue = event.target.value.replace(/[^0-9]/g, '');

    
    if (!isNaN(newValue) && newValue <= max ) {
      setValue(newValue);
    } else {
      setValue(newValue.slice(0, -1));
      newValue = newValue.slice(0, -1);
    }

    //Update slider value only if the entered value is a valid number
    if (!isNaN(newValue)) {      
      setSliderValue(Number(newValue)); // Convert to a number before setting
    }
  };

  // Eventos de slider 
  const onHandlerSlider = (event, newValue) =>{
    setValue(newValue);    
    setSliderValue( Number(newValue) );
  }

  return (
    <>      
      <Typography variant='h7'>Slider amount </Typography>  
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <FormControl onChange={onHandlerInput} variant='outlined' fullWidth sx={{ m: 1 }}>
            
            <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
            <OutlinedInput 
                autoComplete="off"
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start"> 
                <span style={{ color: 'grey', fontWeight: 'bold' }}>$</span></InputAdornment>}
                endAdornment={<span style={{ color: 'black', fontWeight: 'bold', fontSize: 10 }}>,00</span>}
                label="Monto"
                value={ valueInput }
                sx={{fontSize:24, fontWeight: 'bold'}}
                placeholder={max}                 
            />            
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" sx={{p:5}}>
        <Grid item xs={6}>          
          <Slider             
            valueLabelDisplay="on" min={ min } max={ max } onChange={onHandlerSlider}  aria-label="Default" value={sliderValue} />          
          
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    $ { min } min
                </Typography>
                <Typography>
                    $ { max } max 
                </Typography>
            </Box>
        </Grid>        
      </Grid>
    </>
  );
};