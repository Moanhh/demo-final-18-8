
// CHƯA DÙNG DƯỢC ĐÂU!!

import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom';
import {useAuthValue} from '../other/AuthContext';


function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

 

  const login = e => {
    
  }

  return (
    <div>
        return (
            <div className="form">
                <div className="form-body">
                    <div className="email">
                        <label className="form__label" >Email </label>
                        <input type="email" id="email" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="password">
                        <label className="form__label" >Password </label>
                        <input className="form__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                      
                </div>
                <div class="footer">
                    <button type="submit" className="btnL">Login</button>
                    <br/>
                    <span className="have_account">
                    Don't have an account ?  
                    <Link to='/' className="link_login">Create one here</Link>
                </span>
                </div>
                
            </div>

        );
    </div>
  )
}

export default LoginForm;
