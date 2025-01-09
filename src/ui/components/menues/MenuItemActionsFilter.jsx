import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import {  Check, CheckBox, MoreVertOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';



export default function MenuItemActionsFilter( { filters= []}) {
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
        <IconButton onClick={handleClick}>
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
           {filters.map((filter, index) => (
            <MenuItem onClick={handleClose} key={index}><CheckBox></CheckBox>  {filter} </MenuItem>                          
          ))}
          
        </Menu>
    
    </>
  );
}