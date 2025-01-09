import { AppBar,  Box,  Grid, IconButton, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.svg'; 
import MenuProducts from '../../../ui/components/menues/MenuProducts';
import { MenuUser } from '../atoms/MenuUser';



export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
        position='fixed'
        sx={{ 
            //width: { sm: `calc(100% - ${ drawerWidth }px)` }, // calculo de menu 
            //ml: { sm: `${ drawerWidth }px` },
            backgroundColor: "white", 
            margin:0
            
         }}
        >
        <Toolbar>
                        
            <IconButton color='inherit' edge="start" sx={{  display: { sm: 'none' } }}>   
                {/* <MenuOutlined />   */}                
            </IconButton>            
            
            <Grid container>
                <MenuProducts></MenuProducts>
                
                <Box sx={{ display: { xs: 'none', sm:'block' }, ml:1, padding:1}}>
                    <img src={logo} alt="Logo" width={140} />    
                </Box>                
            </Grid>
           
            <Grid container direction='row' justifyContent='end' alignItems='center'>
                <MenuUser />
            </Grid>
        </Toolbar>     
        
    </AppBar>
  )
}
