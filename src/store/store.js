import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { authApi, todosApi } from './apis'

// Store principal
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
          .concat(todosApi.middleware, authApi.middleware) 
})