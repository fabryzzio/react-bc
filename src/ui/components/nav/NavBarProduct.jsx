import * as React from 'react';
import { AppBar,  Box, Button, Grid,  IconButton, Tab, Tabs, Toolbar } from '@mui/material';

import LogoProduct from '../../../assets/products/LogoOriginationProduct.svg'; 

import MenuProducts from '../menues/MenuProducts';

import MenuIcon from '@mui/icons-material/Menu';

import { MenuUser } from '../atoms/MenuUser';


export const NavBarProduct = ({ drawerWidth = 240 }) => {
    const [valuetab, setValue] = React.useState('one');
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
      };
    
  return (
    <AppBar position='fixed'>
        {/* Toolbar principal */}
        
        <Toolbar sx={{backgroundColor: '#1D6CC4'}}>            
            
            <Grid container>                                               
                <Grid item xs={1}>
                    <IconButton color='inherit' edge="start">   
                        <MenuProducts></MenuProducts>
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <img src={LogoProduct} alt="Logo" />    
                </Grid>
                <Grid container xs={6}  justifyContent='end' alignItems='center' direction='row'>                    
                    <MenuUser></MenuUser>                
                    
                </Grid>
            </Grid>            
            
        </Toolbar> 


        {/* Toolbar secundario */}
        <Toolbar sx={{backgroundColor: '#F5F5F5'}}>
            <Grid container>
                <Grid item xs={1}>
                    <Button ><MenuIcon></MenuIcon></Button>                                
                </Grid>
                <Grid item xs={11}>
                <Box 
                    sx={{ width: '100%' }}
                >
                    <Tabs
                        value={valuetab}
                        onChange={handleChangeTab}
                        aria-label="wrapped label tabs dashboard">
                        
                        <Tab value="one" label="BackOffice"  />
                        <Tab value="two" label="Parametrizador" />
                    </Tabs>
                    </Box>
                </Grid>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
