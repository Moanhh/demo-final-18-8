import React, {useState, useRef} from 'react';

// import {Component} from 'react';
// import {Link} from 'react-router-dom';

import { Form, Button, Card, Alert} from 'react-bootstrap'

import {useAuth } from '../../contexts/AuthContext'

// import { async } from '@firebase/util';
import { Link, useNavigate } from "react-router-dom"
import {toast} from 'react-toastify';


// import {ref,push,child,update} from "firebase/database";



export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
   
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate('/dashboard')
      } catch(error) {
        console.log(error)
        setError("Something went wrong")
      }
      
      
      setLoading(false)
    }
  
    


    return (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Log IN
                </Button>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2 mb-2">
            Don't have account? <Link to="/signup">Sign Up</Link>
          </div>
          </Card>
         
        </>
      )
    }
    