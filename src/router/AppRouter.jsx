import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';
import { Loading } from '../components';
import { useCheckAuth } from '../hooks';
import { statusAuth } from '../constants';
import { ProductsPage } from '../dashboard/pages/ProductsPage';


export const AppRouter = () => {
  
  const { status, permission  } = useCheckAuth();
  
  if( status === statusAuth.CHECKING){
    return <Loading open={true}/>
  }
  console.log("status")
  console.log( status );
  console.log( permission );
  
  return (
    /*Routes de sistema  */
    <Routes>
        {
          status === statusAuth.AUTHENTICATED 
          //? <Route path="/products" element={ <ProductsPage /> } />
          ? <Route path="/*" element={ <DashboardRoutes permission={ permission } /> } />
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
