import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Typography } from '@mui/material';
import { LogoutOutlined, AccountBoxOutlined, Circle } from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth';


export const MenuUser = () => {


  const { displayName } = useSelector( state => state.auth ); 
  const dispatch = useDispatch();
  const onLogout = () =>{
    
    dispatch( startLogout() );    
  }

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
        <LogoutOutlined></LogoutOutlined>
        <Typography variant='p'>Casa Central - Sucursal </Typography>
        <IconButton  
          onClick={handleClick}
          sx={{
              color: "white", 
              // '&:hover': {backgroundColor: 'primary.color'},
              // '&:active': {transform: 'scale(0.9)'}
            }}
          >
            <AccountBoxOutlined  />          
            <Typography>{ displayName }</Typography>
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
          <MenuItem onClick={handleClose}> Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
          <MenuItem onClick={ onLogout } >Salir</MenuItem>
          {/* <MenuItem component={Link} to="/auth/login">Salir</MenuItem> */}
        </Menu>
    
    </>
  );
}