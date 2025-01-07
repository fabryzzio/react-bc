import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import logo from '../../assets/logo.svg'; 
import { AuthLayout } from '../layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

 import {LoginForm} from '../../components';

export const LoginPage = () => {
  
  return (
    <AuthLayout title="default">      
      <LoginForm sso></LoginForm>
    </AuthLayout>
  )
}
