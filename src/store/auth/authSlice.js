import { createSlice } from "@reduxjs/toolkit";
import { statusAuth } from "../../constants";

export const authSlice = createSlice({

    name: 'auth', 
    initialState:{
        // Estado inicial de la aplicacion 
        // 'checking' 'not-authenticate', 'authenticated
        status: statusAuth.CHECKING, 
        uid: null,
        email: null, 
        displayName: null,        
        photoURL: null,     
        errorMessage: null,
        entity: null, 
        permission: null
               
    }, 
    reducers:{

        login: (state, { payload } ) => {

            console.log( payload ); 
            state.status = statusAuth.AUTHENTICATED, 
            state.uid =  payload.uid,
            state.email =  payload.email, 
            state.displayName =  payload.displayName,
            state.photoURL =  payload.photoURL,     
            state.errorMessage =  null, 
            state.entity =  payload.entity
            state.permission =  payload.permission
            
        },

        logout: ( state, { payload } ) => {

            console.log( payload ); 

            state.status = statusAuth.NOAUTORIZATHED, 
            state.uid =  null,
            state.email =  null, 
            state.displayName =  null,
            state.photoURL =  null,     
            state.errorMessage =  payload?.errorMessage,
            state.entity = payload?.entity
        },
        
        checkingCredentials: (state) => {
            state.status = statusAuth.CHECKING             
        },

        login2: (state, { payload } ) => {
            state.status = statusAuth.AUTHENTICATED, 
            state.uid =  payload.uid,
            state.email =  payload.email, 
            state.displayName =  payload.displayName,
            state.photoURL =  payload?.photoURL,     
            state.errorMessage =  payload?.errorMessage,
            state.entity = payload.entity,
            state.permission =  payload.permission

        }
    }
});
// Actions creator are generated for each case reducer function
// Action create function
export const { login, logout, login2, checkingCredentials } = authSlice.actions;