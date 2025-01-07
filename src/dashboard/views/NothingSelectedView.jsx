import { colors, FormControl,  Grid,  InputAdornment, InputLabel, OutlinedInput, Slider, Typography} from '@mui/material';
import { useState } from 'react';


export const NothingSelectedView = () => {

  /* Campo de texto */
  const [valueInput, setValue] = useState('');
  
  /*Slider */
  const [sliderValue, setSliderValue] = useState(2500);


  const onHandlerInput = (event) => {
    
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    setValue(newValue);
    
    //Update slider value only if the entered value is a valid number
    if (!isNaN(newValue)) {
      
      setSliderValue(Number(newValue)); // Convert to a number before setting
    }
  };


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
              startAdornment={<InputAdornment position="start"> <span style={{ color: 'black', fontWeight: 'bold' }}>$</span></InputAdornment>}
              endAdornment={<span style={{ color: 'black', fontWeight: 'bold', fontSize: 10 }}>,00</span>}
              label="Monto"
              value={valueInput}
              sx={{fontSize:18, fontWeight: 'bold', textAlign: 'center'}}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" sx={{p:5}}>
        <Grid item xs={6}>          
          <Slider valueLabelDisplay="on" min={0} max={100000} onChange={onHandlerSlider}  aria-label="Default" value={sliderValue} />          
        </Grid>        
      </Grid>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
        <Typography>Minimo: 0</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography>Max: 0</Typography>
        </Grid>
      </Grid>

      
      

      

      {/* <FormGroup>
        <FormControlLabel control={<Switch size='small' defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch size='small' />} label="Required" />
        <FormControlLabel disabled control={<Switch size='small' />} label="Disabled" />
      </FormGroup> */}

    </>
  );
};