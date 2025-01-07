
import * as React from 'react';
import { Box, Drawer } from '@mui/material'


import { MenuPrincipal } from '../menues/MenuPrincipal';


export const SideBar = ({ drawerWidth = 304 }) => {        

  const [open, setOpen] = React.useState(true); // Estado para controlar la apertura del drawer
  const handleDrawerToggle = () => {
    setOpen(!open); 
  };
    
  return (
    <>
        <Box component='nav' sx={{  width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>                        
            <Drawer        
                variant='permanent' // temporary
                open={open}
                onClose={handleDrawerToggle} 
                sx={{ display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: 16}                 
                }}
            >
                <MenuPrincipal></MenuPrincipal>
            </Drawer>       
        </Box>
    </>
  )
}
