import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout, login2 } from '../store/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';

export const useCheckAuth = () => {
    
    const status  = useSelector(state => state.auth);   
    const dispatch = useDispatch();   
    

    
    useEffect( ()=> {        

        onAuthStateChanged( FirebaseAuth, async( user ) => {
            
            
            if( !user ) return dispatch( await logout(user));
            //if( (typeof status.uid !== "undefined" ) && !user   ) return dispatch( await logout(user));

                const { uid , email, displayName, photoURL} = user;             

                dispatch( await login( { uid , email, displayName, photoURL} ) ); 
    
        }, []); 

    });
    
    return status;    
    
}
