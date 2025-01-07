import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {  Button,  Grid, Link, TextField  } from '@mui/material';
import logo from '../../assets/logo.svg'; 
import { useNavigate } from 'react-router-dom';

import { userForm } from '../../hooks';

import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { Loading } from '../../ui/components/Loading';
import { useGetAuthQuery, useGetTodoQuery, useGetTodosQuery } from '../../store/apis';


export const LoginForm = ( { sso }) => {   
    
  // const {data: todos = [], isLoadingList} = useGetTodosQuery();
  // const [todoId, setTodoId] = useState(1);
  // const {data: todo, isLoading} = useGetTodoQuery(todoId);
  // console.log(todo);
  // console.log(todos);
  


    const { status } = useSelector( state => state.auth );
    
    const dispatch = useDispatch();

    const {email, password, onInputChange, onResetForm } = userForm({
        email: 'fabricio.centioni@beclevercorp.com',
        password: '12345678'
        // email: '',
        // password: ''
    })

    const isAutheticating = useMemo( () => status === 'checking', [ status ] );    

    const onSubmit = async (event) => {
        event.preventDefault();       
        dispatch( startLoginWithEmailPassword( {email, password } ));
        
    }

    const onGoogleSignIn = () => {
        console.log("onGoogleSignIn");
        dispatch( startGoogleSingIn() );        
    }

  return (
    <>
     
    <Loading open={isAutheticating}></Loading>     


    <Grid container
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"  
         sx={{ padding:2}}>
        <img src={logo} alt="Logo"/>
      </Grid>
      
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                variant='filled'
                label="Usuario" 
                type="text" 
                placeholder='Su usuario' 
                fullWidth    
                name='email'
                value={ email }               
                onChange={onInputChange}                             
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                variant='filled'
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth     
                name='password'
                value={ password }
                onChange={onInputChange}

              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 1, mt: 1 }}>
              <Grid item xs={ 12 } >
                <Button 
                    type='submit' 
                    variant='contained' 
                    fullWidth 
                    disabled ={isAutheticating}
                    >
                  Ingresar                  
                </Button>

              </Grid>
            {sso &&(
                <Grid item xs={ 12 } >
                  <Button 
                    disabled ={isAutheticating}
                    onClick={ onGoogleSignIn } 
                    variant='outlined' 
                    fullWidth
                    >
                    Continuar con Google
                  </Button>
                </Grid>)            
            } 
            </Grid>


            <Grid container direction='row' justifyContent='center' sx={{ mb: 1, mt: 1 }}>
              <Link 
                component={ RouterLink } 
                color='inherit' 
                to="/auth/forgot-password"
                sx={{ textDecoration: 'none', fontSize: 12, color: "grey.main" }}>
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
      </form>
      </>
  )
}
