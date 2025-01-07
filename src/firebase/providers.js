import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { todosApi, useGetAuthQuery } from "../store/apis";
import axios from "axios";
import { responsiveFontSizes } from "@mui/material";

const googleProvider = new GoogleAuthProvider();


export const singInWidthGoogle = async() => {
    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider ); 
        const credencials = GoogleAuthProvider.credentialFromResult( result );         
        
        const { displayName, email, photoURL, uid } = result.user; 
        
        const entity = "entity Test"; 
        
        
        const response = {
            ok: true,            
            displayName, email, photoURL, uid, entity 
        };
        console.log( "provider ");
        console.log( response );

        return response;


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
        
        const entity = "entity Test"; 

        // const products = [
        //     { id: 1, name: 'Manzana', price: 0.5 },
        //     { id: 2, name: 'Banana', price: 0.3 },
        //   ];



        return {
            ok: true,            
            displayName, email, photoURL, uid, entity
        }


    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}



export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut(); 
}