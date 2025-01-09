import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
import { ProductsListHeader } from '../../../dashboard/views';
import AppsIcon from '@mui/icons-material/Apps';

export default function MenuProducts() {
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
        <Box sx={{backgroundColor: "transparent"}}>
          <AppsIcon onClick={handleClick}></AppsIcon>          
        </Box> 
        
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}  sx={{mt:'11px'}}>            
             {/* <MenuItem onClick={handleClose}>Logout</MenuItem>  */}
            <ProductsListHeader/>      
        </Menu>
    </>
  );
}