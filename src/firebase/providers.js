import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { todosApi, useGetAuthQuery } from "../store/apis";
import axios from "axios";
import { responsiveFontSizes } from "@mui/material";

const googleProvider = new GoogleAuthProvider();


export const singInWidthGoogle = async() => {
    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider ); 
        // const credencials = GoogleAuthProvider.credentialFromResult( result ); 
        // console.log( { credencials } );
        
        const { displayName, email, photoURL, uid } = result.user; 
        console.log( { result } );

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch ( error ) {
        console.log( { error } ); 

        const errorCode = error.code;
        const errorMessage = error.message; 

        return{
            ok: false,
            errorCode, errorMessage
        }
    }
}

export const loginBeClever = async( email, password ) => {
    try {   
            //'https://api-dev.creditomillon.com/CleverMiddleware.Gateway/api/v1/CreditoMillonAuth/login',
            
            const response = await axios.post(
              'http://10.10.100.112:88/CreditoMillon/Middleware/Gateway/api/v1/CreditoMillonAuth/login',
              
              {
                user: email,
                password: password,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );      
       
        const { lastName, name, mail, userCore} = response.data;

        let displayName = lastName;        
        let uid         = userCore;
        let photoURL    = "";

        return {
            ok: true,            
            displayName, email, photoURL, uid
        }


    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}



export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut(); 
}