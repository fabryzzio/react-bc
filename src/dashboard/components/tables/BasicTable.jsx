import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItemActions from '../menues/MenuItemActions';
import MenuItemActionsFilter from '../menues/MenuItemActionsFilter';
import { StatusLabel } from '../atoms/StatusLabel';
import { BottomNavigation, BottomNavigationAction, Box, Divider, Grid, InputAdornment, TablePagination, TextField, Typography } from '@mui/material';


import RefreshIcon from '@mui/icons-material/Refresh';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

function createData(code, status, name, id , product, entity ) {
  
  return { code, status, name,id, product, entity };
}


const rows = [
  createData('00239',<StatusLabel label='Aprobado' color='success'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),
  createData('00240',<StatusLabel label='Observado' color='warning'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),
  createData('00241',<StatusLabel label='Precarga' color='info'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),
  createData('00242',<StatusLabel label='Rechazado' color='error'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),
  createData('00243',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00244',<StatusLabel label='Observado' color='info'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad') ,
  
  
  createData('00245',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00246',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00247',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00248',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00249',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00250',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00251',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00252',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00253',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
  createData('00254',<StatusLabel label='Pendiente' color='secondary'></StatusLabel>, 'Metalurigicas Pacifico ', '30-22.333.444-1', 'Factoring', 'Entidad'),  
 
];



export const BasicTable = () => {

  const [value, setValue] = React.useState(0);

  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredData = rows.filter((row) =>{      
      row.code.toLowerCase().includes(searchQuery.toLowerCase())
    }
    
  );


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (

<>

    <Grid container sx={{backgroundColor:'#37FAFA'}}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box sx={{m:1}}>
            <img
              src="https://placehold.co/500x80" // Reemplazar imagen 
              alt="Grilla "
              style={{ width: '100%', objectFit:'cover' }} 
            />
          </Box> 
        </Grid>
        <Grid item xs={4}></Grid>
    </Grid>

    <Divider></Divider>

    <Grid container sx={{p:2}}>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{fontWeight: 'bold'}}>Gestión de Lending Factoring</Typography>        
        </Grid>
    </Grid>
    

    <Grid container spacing={2} sx={{mb:2}}>
        <Grid item xs={3}>
          <TextField fullWidth size='small'
              placeholder='Buscar'
              variant="outlined"              
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

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
      <Table size='small' stickyHeader sx={{ minWidth:50, width:'100%'}} aria-label="basic table" >
        <TableHead>
          <TableRow>
            <TableCell align='left'>Código</TableCell>
            <TableCell align='left'>Estado</TableCell>
            <TableCell align="left">Razon Social</TableCell>
            <TableCell align="left">CUIT</TableCell>
            <TableCell align="left">Producto</TableCell>
            <TableCell align="left">Entidad</TableCell>            
            <TableCell align="right">
              <MenuItemActionsFilter></MenuItemActionsFilter>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >   
        {/* <div style={{ maxHeight: 400, overflowY: 'auto' }}>     */}
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                <TableRow key={row.code}>
                  <TableCell component="th" scope="row">
                    {row.code}
                  </TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell align="left">{row.entity}</TableCell>              
                  <TableCell align="right">
                    <MenuItemActions></MenuItemActions>
                  </TableCell>
                </TableRow>
              ))
          }        
          {/* </div> */}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </TableContainer>
    </>
  );
}