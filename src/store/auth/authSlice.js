import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({

    name: 'auth', 
    initialState:{
        // Estado inicial de la aplicacion 
        // 'checking' 'not-authenticate', 'authenticated
        status: 'checking', 
        uid: null,
        email: null, 
        displayName: null,
        photoURL: null,     
        errorMessage: null

    }, 
    reducers:{

        login: (state, { payload } ) => {

            state.status =  'authenticated', 
            state.uid =  payload.uid,
            state.email =  payload.email, 
            state.displayName =  payload.displayName,
            state.photoURL =  payload.photoURL,     
            state.errorMessage =  null
        },

        logout: ( state, {payload} ) => {
            state.status =  'not-authenticate', 
            state.uid =  null,
            state.email =  null, 
            state.displayName =  null,
            state.photoURL =  null,     
            state.errorMessage =  payload?.errorMessage
        },
        
        checkingCredentials: (state) => {
            state.status = 'checking';            
        },

        login2: (state, { payload } ) => {
            state.status =  'authenticated', 
            state.uid =  payload.uid,
            state.email =  payload.email, 
            state.displayName =  payload.displayName,
            state.photoURL =  payload?.photoURL,     
            state.errorMessage =  payload?.errorMessage
        }
    }
});
// Actions creator are generated for each case reducer function
// Action create function
export const { login, logout, login2, checkingCredentials } = authSlice.actions;