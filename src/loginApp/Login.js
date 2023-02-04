// import './Registration.css';
// import Header from '../layouts/Header';
import LoginForm from './pages/LoginForm';

import { Container } from 'reactstrap';
import AuthProvider from '../contexts/AuthContext'

function LoginApp() {
  return (
  <AuthProvider>
    <Container
      className='d-flex align-items-center 
      justify-content-center' 
      style={{minHeight:"100vh"}}>
        <div className='w-100'
          style ={{maxWidth: "400px"}}>
          <LoginForm />
        </div>
           

      </Container>
     
  </AuthProvider>
    
     
   

   
  );
}

export default LoginApp;