import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { AccountBoxOutlined, ModeEdit, MoreVertOutlined } from '@mui/icons-material';



export default function MenuItemActions() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>  
        <IconButton>
            <ModeEdit  />      
        </IconButton>        
        <IconButton 
          onClick={handleClick}
          sx={{
                            '&:hover': {backgroundColor: 'primary.color'},
              '&:active': {transform: 'scale(0.9)'}
            }}
          >
            <MoreVertOutlined  />          
            
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Consultar </MenuItem>
          <MenuItem onClick={handleClose}>Imprimir</MenuItem>
          <MenuItem onClick={handleClose}>Gestionar</MenuItem>
        </Menu>
    
    </>
  );
}