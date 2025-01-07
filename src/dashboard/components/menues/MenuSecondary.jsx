import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
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
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Divider, Typography } from '@mui/material';

export const MenuSecondary = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

  return (
    <Box sx={{ overflow: '', position: 'fixed', width:64, display: 'flex', justifyItems:'center', alignItems:'center', height:'100vh'}}>
    <List component="nav" aria-labelledby="nested-list-subheader">      
      <ListItemButton  selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>        
      </ListItemButton>
      <ListItemButton  selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>        
      </ListItemButton>
      <ListItemButton  selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>        
      </ListItemButton>
    </List>   
    </Box>             
  );
}

