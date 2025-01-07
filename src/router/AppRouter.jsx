import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';
import { Loading } from '../components';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {
  
  const { status  } = useCheckAuth();
  
  if( status === 'checking'){
    return <Loading open={true}/>
  }

  console.log( status );

  return (
    /*Routes de sistema  */
    <Routes>
        {
          status === 'authenticated' 
           //? <Route path="/products" element={ <ProductsPage /> } />
          ? <Route path="/*" element={ <DashboardRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }   

        <Route path="/*" element={ <Navigate to='/auth/login'/> } />  
      
        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}
        {/*Primer pantalla */}
        {/* <Route path="/products" element={ <ProductsPage /> } />         */}
        {/* BCApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    </Routes>
  )
}
