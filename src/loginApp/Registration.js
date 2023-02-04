import './Registration.css';
// import Header from '../layouts/Header';
import RegistrationForm from './pages/RegistrationForm';

import { Container } from 'reactstrap';
import AuthProvider from '../contexts/AuthContext'

function RegistrationApp() {
  return (
  <AuthProvider>
    <Container
      className='d-flex align-items-center 
      justify-content-center' 
      style={{minHeight:"100vh"}}>
        <div className='w-100'
          style ={{maxWidth: "400px"}}>
          <RegistrationForm />
        </div>
           

      </Container>
     
  </AuthProvider>
    
     
   

   
  );
}

export default RegistrationApp;