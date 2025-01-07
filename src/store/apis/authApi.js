/* Creacion de API para consumir servicios de Autentificacion */

import { createApi, fetchBaseQuery} from  '@reduxjs/toolkit/query/react';

export const authApi = createApi({

    reducerPath: 'AuthBC',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-dev.creditomillon.com/CleverMiddleware.Gateway/api/v1/CreditoMillonAuth'
    }),
    
    endpoints: (builder) => ({
        getAuth: builder.query({               
            query: (credencials) => ({ 
                url: '/login',
                method: 'POST', 
                body: credencials
            })
        }),
    })
});

export const { useGetAuthQuery } = authApi;    