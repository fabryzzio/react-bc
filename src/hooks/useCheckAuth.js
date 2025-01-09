import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout  } from '../store/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { permissionAuth } from '../constants';

export const useCheckAuth = () => {
    
    const status  = useSelector(state => state.auth);   
    const dispatch = useDispatch();      

    
    useEffect( ()=> {        
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {            
            
            if( !user ) return dispatch( await logout( user ));            

                const { uid , email, displayName, photoURL} = user;          

                const entity = 'Sucursal Test'; // aca hay que ver como integrarlo con login unificado
                const permission = "admin"; // aca hay que ver como integrarlo con una llamada a servicios, por defecto es "default"

                dispatch( await login( { uid , email, displayName, photoURL, entity, permission } ) ); 
    
        }, [] ); 

    });

    return status;    
    
}
