import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box, Grid } from '@mui/material';
import {  NavBarProduct, SideBar } from '../components';

import { SideBar1 } from '../components/sidebar/SideBar1';

const drawerWidth = 250;

export const DashBoardLayout = ({ children, navbar = true }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Para los casos que no se necesite la barra superior*/}
      {navbar ? (
        <Box
          
          sx={{
            width: { md: drawerWidth },
            flexShrink: { md: 0 },            
          }}
        >
          <NavBarProduct drawerWidth={0} />
          <SideBar drawerWidth={drawerWidth} />
          {/* <SideBar1></SideBar1>             */}
          
        </Box>
      ) : (<></>)}
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,            
            p:2,
            // ml: `${64}px` ,
            mt:16,
            flexDirection: 'column'
            //width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >        

          {children}  
        </Box>
    </Box>
  );
};