import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import {  ModeEdit, MoreVertOutlined } from '@mui/icons-material';



export default function MenuItemActions( { item }) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleOpen = (itemId) => {
    // Aquí puedes realizar acciones basadas en el itemId
    console.log('Item selected: open', itemId);
    setAnchorEl(null);
  };
  const handlePrint = (itemId) => {
    // Aquí puedes realizar acciones basadas en el itemId
    console.log('Item selected: print', itemId);
    setAnchorEl(null);
  };

  const handleGestion = (itemId) => {
    // Aquí puedes realizar acciones basadas en el itemId
    console.log('Item selected: gestion', itemId);
    setAnchorEl(null);
  };

  const handleEdit = (itemId) => {
    // Aquí puedes realizar acciones basadas en el itemId
    console.log('Item selected: edit', itemId);
    setAnchorEl(null);
  };

  return (
    <>  
        <IconButton>
            <ModeEdit onClick={() => handleEdit(item)} />      
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
            id="menu-table"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}        
        > 
          <MenuItem onClick={() => handleOpen(item)} >Consultar  </MenuItem>
          <MenuItem onClick={() => handlePrint(item)} >Imprimir </MenuItem>
          <MenuItem onClick={() => handleGestion(item)} >Gestionar </MenuItem>
        </Menu>
    
    </>
  );
}