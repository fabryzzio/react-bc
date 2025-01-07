/* Se define el thunk para tareas asincronas  */
import { loginBeClever, logoutFirebase, singInWidthGoogle } from "../../firebase/providers";
import { useGetAuthQuery } from "../apis";
import { checkingCredentials, logout, login, login2  } from "./authSlice";

export const checkingAuthetication = ( email, password ) => {
    return async ( dispatch) => {
        dispatch( checkingCredentials() );
        console.log("checkingAuthetication");     

    }
}

export const startGoogleSingIn = ( ) => {
    return async ( dispatch) => {
        
        dispatch( checkingCredentials() );

        const result = await singInWidthGoogle();

        console.log( " startGoogleSingIn ");       

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
        dispatch( login( result ));

    }
}


export const startLoginWithEmailPassword = ( {email, password} ) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );

        const result = await loginBeClever( email, password ); 

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        console.log( result );        
        
        dispatch( login2( result ));

    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();

        dispatch( logout() ); 
    }
}