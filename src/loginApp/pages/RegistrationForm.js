import React, {useState, setState} from 'react';
import '../Registration.css';
// import {Component} from 'react';
import {Link} from 'react-router-dom';

import database from '../firebase'
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');


        const handleInputChange = (e) => {
            const { id, value } = e.target;
            if (id === "firstName") {
                setFirstName(value);
            }
            if (id === "lastName") {
                setLastName(value);
            }
            if (id === "email") {
                setEmail(value);
            }
            if (id === "password") {
                setPassword(value);
            }
            if (id === "confirmPassword") {
                setConfirmPassword(value);
            }

        };

        const handleSubmit = () =>{
            let obj = {
                    firstName : firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    confirmPassword:confirmPassword,
                }       
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {};
            updates['/' + newPostKey] = obj
            return update(ref(database), updates);
        }
    

        return (
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" >First Name </label>
                        <input className="form__input" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} id="firstName" placeholder="First Name" />
                    </div>
                    <div className="lastname">
                        <label className="form__label" >Last Name </label>
                        <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={e => setLastName(e.target.value)} placeholder="LastName" />
                    </div>
                    <div className="email">
                        <label className="form__label" >Email </label>
                        <input type="email" id="email" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="password">
                        <label className="form__label" >Password </label>
                        <input className="form__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" >Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    </div>
                </div>
                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" className="btnR">Register</button>
                    <br/>
                    <span className="have_account">
                    Already have an account?  
                    <Link to='/LoginForm' className="link_login">Login</Link>
                </span>
                </div>
                
            </div>

        );
    }

export default RegistrationForm;