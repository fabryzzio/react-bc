import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Typography } from '@mui/material';
import { LogoutOutlined, AccountBoxOutlined, AccountCircle, AccountCircleOutlined, LockOutlined, HelpOutline, BuildCircle, Circle } from '@mui/icons-material';


import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth';
import { useNavigate  } from 'react-router-dom';

export const MenuUser = () => {

  const { displayName, entity  } = useSelector( state => state.auth ); 

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onAccount= () =>{
    navigate("/account");
  }

  const OnChangePass= () =>{
    navigate("/change-password");
  }

  const onProfile= () =>{
    navigate("/profile");
  }

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
        
        <Typography variant='body1'>{ entity  }</Typography>
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
          <MenuItem onClick={ onAccount }>  <HelpOutline  fontSize='small' sx={{mr:1}} />   Preguntas Frecuentes </MenuItem>
          <MenuItem onClick={ OnChangePass }>  <LockOutlined  fontSize='small' sx={{mr:1}} />  Cambio de clave </MenuItem>
          <MenuItem onClick={ onProfile }>  <AccountCircleOutlined  fontSize='small' sx={{mr:1}}  />  Perfil</MenuItem>          
          <MenuItem onClick={ onLogout } >  <Circle  fontSize='small' sx={{mr:1}} />  Salir</MenuItem>
          
        </Menu>
    
    </>
  );
}