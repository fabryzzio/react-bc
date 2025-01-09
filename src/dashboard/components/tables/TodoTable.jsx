import * as React from 'react';
/*Dependiencias de Material UI*/
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { BottomNavigation, BottomNavigationAction, Box, Divider, Grid, InputAdornment, TablePagination, TextField, Typography } from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';


//Componentes 
import { Loading } from '../../../components';
import { StatusLabel } from '../../../ui/components/atoms/StatusLabel';
import MenuItemActions from '../../../ui/components/menues/MenuItemActions';
import MenuItemActionsFilter from '../../../ui/components/menues/MenuItemActionsFilter';
//Store 
import {  useGetTodosQuery } from '../../../store/apis';

export const TodoTable = ( { title = "Default"}) => {
  
    const { data: todos = [], isLoading, error } = useGetTodosQuery();
    
    if (error) return <div>Error: {error.message}</div>;
    
    const columns = Object.keys(todos[0]);    
    
    const [value, setValue] = React.useState(0);

    // const [searchQuery, setSearchQuery] = React.useState('');    

    // const filteredData = todos.filter((row) =>{      
    //     row.title.toLowerCase().includes(searchQuery.toLowerCase())
    // });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  /* Opciones de paginado */
  const handleChangePage = (event, newPage) => {
    setPage( newPage );
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      <Loading open={isLoading}></Loading>    

      
      <Grid container sx={{backgroundColor:'#37FAFA'}}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Box sx={{m:1}}>
              <img
                src="https://placehold.co/500x80" // Reemplazar imagen 
                alt="Grilla"
                style={{ width: '100%', objectFit:'cover' }} 
              />
            </Box> 
          </Grid>
          <Grid item xs={4}></Grid>
      </Grid>

      <Grid container sx={{p:2}}>
          <Grid item xs={12}>
            <Typography variant='h6' sx={{fontWeight: 'bold'}}>{title}</Typography>        
          </Grid>
      </Grid>
    

      <Grid container spacing={2} sx={{mb:2}}>
          <Grid item xs={3}>
            <TextField fullWidth size='medium'
                placeholder='Buscar'
                variant="outlined"              
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" /> {/* Set the icon color */}
                    </InputAdornment>
                  ),
                }}
              />
          </Grid>

          <Grid item xs={9}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'  }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{backgroundColor: 'transparent'}}
            >
              
              <BottomNavigationAction icon={<RefreshIcon />} />
              <BottomNavigationAction icon={<SaveAltIcon />} />
              <BottomNavigationAction icon={<TuneIcon />} />
            </BottomNavigation>
            </Box>
          </Grid>

      </Grid>
    

    <TableContainer component={Paper} >      
      <Table size='small' stickyHeader sx={{ minWidth:50, width:'100%'}} aria-label="Todo table" >
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
                <TableCell key={index} align='left'>{ column.toUpperCase() }</TableCell>                
            ))}
            <TableCell align="right">
                    <MenuItemActionsFilter filters={columns}></MenuItemActionsFilter>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>          

            {todos.map((item) => (
            <TableRow key={item.id}>
                { columns.map((column, index) => (
                    <TableCell key={index}>
                        {typeof item[column] === 'boolean' ? (
                            
                            <StatusLabel label={ item[column] ? 'Pendiente' : 'Completado' } color={item[column] ? 'error' : 'success'} />
                            // Display "True" or "False" for booleans
                            ) : (
                            item[column] // Display the value as-is for non-booleans
                            )
                        }
                      
                    </TableCell>
                ))}
                <TableCell align="right">
                    <MenuItemActions item={item}></MenuItemActions>
                </TableCell>    
            </TableRow>
            ))}
          
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50 ]}
        component="div"
        count={todos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </TableContainer>
    </>
  );
}