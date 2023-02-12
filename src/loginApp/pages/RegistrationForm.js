import React, { useRef, useState } from "react"
// import {ref} from "firebase/storage"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
// import {storage} from '../firebase'
// import {toast} from 'react-toastify'

import {setDoc, doc, addDoc}  from "firebase/firestore"
import { db, users } from "../firebase"


import UserDataService from "../../services/users.services"

export default function Signup() {


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  
  // const {currentUser} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // const user = currentUser;

  async function createUser(db, username, email) {
    await addDoc(users, {
      username: username,
      email: email,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // setLoading(true)

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    
    try {


      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      
     
      navigate("/home")
    } catch(error) {
      setError("Something went wrong")
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 mb-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </Card>
      
    </>
  )
}