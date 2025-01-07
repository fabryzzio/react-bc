import * as React from 'react';
import { FormControl,  Grid,  InputAdornment, InputLabel, OutlinedInput, Slider, Typography, Box} from '@mui/material';

import { useState } from 'react';

const MAX = 50000;
const MIN = 0;

export const SliderInputAmount = () => {

  /* Campo de texto */
  const [valueInput, setValue] = useState("");
  
  /*Slider */
  const [sliderValue, setSliderValue] = useState(MIN);

    /*Evento */
  const onHandlerInput = (event) => {
    
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    setValue(newValue);
    
    //Update slider value only if the entered value is a valid number
    if (!isNaN(newValue)) {      
      setSliderValue(Number(newValue)); // Convert to a number before setting
    }
  };



  // Eventos de slider 
  const onHandlerSlider = (event, newValue) =>{
    setValue(newValue);    
    setSliderValue(Number(newValue));
  }

  return (
    <>        
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <FormControl onChange={onHandlerInput} variant='outlined' fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
            <OutlinedInput                 
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start"> 
                <span style={{ color: 'grey', fontWeight: 'bold' }}>$</span></InputAdornment>}
                endAdornment={<span style={{ color: 'black', fontWeight: 'bold', fontSize: 10 }}>,00</span>}
                label="Monto"
                value={valueInput}
                sx={{fontSize:24, fontWeight: 'bold', textAlign: 'left'}}
                placeholder='1.000,00'                 
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" sx={{p:5}}>
        <Grid item xs={6}>          
          <Slider             
            valueLabelDisplay="on" min={MIN} max={MAX} onChange={onHandlerSlider}  aria-label="Default" value={sliderValue} />          
          
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    $ {MIN} min
                </Typography>
                <Typography>
                    $ {MAX} max 
                </Typography>
            </Box>
        </Grid>        
      </Grid>

      

      

    </>
  );
};