import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import { Circle, StarBorder } from '@mui/icons-material';


import { Box, Typography} from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MenuPrincipal = () => {
    
    {/* Se obtienen los permisos de store  */}
    const { permission  } = useSelector( state => state.auth );    


    const [selectedIndex, setSelectedIndex] = React.useState(1);
    
    const navigate = useNavigate(); 

    const handleListItemClick = (event, index) => {

      switch( index ){
        
        case 1: navigate("/dashboard");break;
        case 2: navigate("/dashboard2");break;
        case 3: navigate("/dashboard3");break;
        case 4: navigate("/dashboard4");break;        
      }

      setSelectedIndex(index);

    };
    
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <>
    <List
      sx={
            { 
                paddingTop:'20px', 
                paddingRight: '16px',
                paddingBottom: '8px',
                paddingLeft: '16px'
            }
        }
      component="nav"
      aria-labelledby="nested-list-subheader"
                //   subheader={
                //     <ListSubheader component="div" id="nested-list-subheader">
                //       Header list
                //     </ListSubheader>
                //   }
        >
      
      <ListItemButton  selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio"  />
      </ListItemButton>
    


      <ListItemButton  selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Seguridad" />
      </ListItemButton>


      <ListItemButton onClick={handleClick} >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Solicitudes" />
        {open ?  <ExpandLess /> : <KeyboardArrowRightIcon /> }
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}>            
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Prendarios" />

          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}  selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}>            
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Personales" />
          </ListItemButton>
        </List>
      </Collapse>

      

      <ListItemButton  selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}>
        <ListItemIcon>
          <Circle />
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItemButton>

      <ListItemButton  selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}>
        <ListItemIcon>
          <Circle />
        </ListItemIcon>
        <ListItemText primary="Tarjetas" />
      </ListItemButton>

      <ListItemButton  selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}>
        <ListItemIcon>
          <Circle />
        </ListItemIcon>
        <ListItemText primary="Licenciamiento" />
      </ListItemButton>

      <ListItemButton  selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}>
        <ListItemIcon>
          <Circle />
        </ListItemIcon>
        <ListItemText primary="Configuracion" />
      </ListItemButton>
    </List>    
    
    <Box sx={{ position: 'fixed', bottom: 10, left: 20, fontSize:12 }}>        
        <Typography variant='body1'>Clever Origination</Typography>
        <Typography variant='body1'>Version 1.0.2.0 * </Typography>
        <Typography variant='body1'>&reg; BeClever</Typography>
    </Box>
    
    </>             
  );
}

