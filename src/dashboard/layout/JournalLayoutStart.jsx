import { Box, Grid } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 0;
export const JournalLayoutStart = ({ children }) => {
  return (

    <>
      <Box
                component="nav"
                sx={{
                  width: { md: drawerWidth },
                  flexShrink: { md: 0 },
                }}
              >
                
                <NavBar drawerWidth={drawerWidth} />
              </Box>

              <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F0F0F0",
        minHeight: '100vh', // Adjust the height as needed
      }}>
        <Grid container xs={6} spacing={2}>
          {children}
        </Grid>
      </Box>
    </>
    
  );
};