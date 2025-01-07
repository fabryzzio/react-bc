import { Navigate, Route, Routes } from 'react-router-dom';
import { ForgotPassword, LoginPage } from '../pages';
import { SuccessForgotPassword } from '../pages/SuccessForgotPasswordPage';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />        
        <Route path="forgot-password" element={ <ForgotPassword /> } />
        <Route path="success-forgot-password" element={ <SuccessForgotPassword /> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
