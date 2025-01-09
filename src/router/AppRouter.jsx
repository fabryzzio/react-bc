import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';
import { Loading } from '../components';
import { useCheckAuth } from '../hooks';
import { statusAuth } from '../constants';

export const AppRouter = () => {
  
  const { status, permission  } = useCheckAuth();

  if( status === statusAuth.CHECKING ){
    return <Loading open={true}/>
  }  
  
  return (
    
    <Routes>
        {
          /* Routing segun statusAuth  */ 
          status === statusAuth.AUTHENTICATED           
          ? <Route path="/*" element={ <DashboardRoutes permission={ permission } /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }   

        <Route path="/*" element={ <Navigate to='/auth/login'/> } />  
      
    </Routes>
  )
}
