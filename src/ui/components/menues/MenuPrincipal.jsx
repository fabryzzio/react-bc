import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import { Circle, StarBorder, SecurityOutlined, CalendarMonthOutlined, HelpCenterOutlined} from '@mui/icons-material';


import { Box, Button, Typography} from '@mui/material';
import { Link, useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MenuPrincipal = () => {
    
    {/* Se obtienen los permisos de store  */}
    const { permission  } = useSelector( state => state.auth ); 

    const [selectedIndex, setSelectedIndex] = React.useState('inicio');

    const handleListItemClick = (event, index) => {

      event.stopPropagation();
      // switch( index ){
        
      //   case 1: navigate("/dashboard");break;
      //   case 4: navigate("/dashboard");break;
      //   case 2: navigate("/dashboard2");break;        
      //   case 3: navigate("/dashboard3");break;
      //   case 6: navigate("/componentes");break;        
      // }
      console.log( index );
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
      

      


      <ListItemButton  selected={selectedIndex === 'inicio'}
          onClick={(event) => handleListItemClick(event, 'inicio')} component={Link} to="/dashboard">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio"  />
      </ListItemButton>
    
      <ListItemButton  selected={selectedIndex === 'seguridad'}
          onClick={(event) => handleListItemClick(event, 'seguridad')} component={Link} to="/seguridad">
        <ListItemIcon>
          <SecurityOutlined />
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
          <ListItemButton sx={{ pl: 4 }}  selected={selectedIndex === 'personales'}
            onClick={(event) => handleListItemClick(event, 'personales')} component={Link} to="/personales">            
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Personales" />

          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}  selected={selectedIndex === 'prendarios'}
            onClick={(event) => handleListItemClick(event, 'prendarios')} component={Link} to="/prendarios">            
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Prendarios" />
          </ListItemButton>
        </List>
      </Collapse>

      

      <ListItemButton  selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}>
        <ListItemIcon>
          <CalendarMonthOutlined />
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItemButton>

      <ListItemButton  selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)} component={Link} to="/componentes">
        <ListItemIcon>
          <Circle />
        </ListItemIcon>
        <ListItemText primary="Componentes" />
      </ListItemButton>

      <ListItemButton  selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}>
        <ListItemIcon>
          <HelpCenterOutlined />
        </ListItemIcon>
        <ListItemText primary="Ayuda" />
      </ListItemButton>

      <ListItemButton  selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}>
        <ListItemIcon>
          <Circle />
        </ListItemIcon>
        <ListItemText primary="Licenciamiento" />
      </ListItemButton>
    </List>    
    
    <Box sx={{ position: 'fixed', bottom: 10, left: 20, fontSize:12 }}>        
        <Typography variant='body1'>BeClever Origination</Typography>
        <Typography variant='body1'>Version 1.0.0.1 </Typography>
        <Typography variant='body1'>&reg; BeClever</Typography>
        <Typography variant='body1'>Permiso:{permission}</Typography>
    </Box>
    
    </>             
  );
}

