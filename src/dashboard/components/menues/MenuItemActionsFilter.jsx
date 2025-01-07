import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import {  Check, CheckBox, MoreVertOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';



export default function MenuItemActionsFilter() {
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
        <IconButton 
          onClick={handleClick}
          sx={{
                            // '&:hover': {backgroundColor: 'primary.color'},
              // '&:active': {transform: 'scale(0.9)'}
            }}
          >
          <MenuIcon  />          
            
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
          <MenuItem onClick={handleClose}><CheckBox></CheckBox> Código </MenuItem>
          <MenuItem onClick={handleClose}><CheckBox></CheckBox> Estados</MenuItem>
          <MenuItem onClick={handleClose}><CheckBox></CheckBox> Razón Social</MenuItem>
          <MenuItem onClick={handleClose}><CheckBox></CheckBox> CUIT</MenuItem>
          <MenuItem onClick={handleClose}><CheckBox></CheckBox> Producto</MenuItem>
          <MenuItem onClick={handleClose}><CheckBox></CheckBox> Entidad</MenuItem>
        </Menu>
    
    </>
  );
}