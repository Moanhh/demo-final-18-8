import React from 'react'
import {  Card } from 'reactstrap'
import {Button } from "react-bootstrap"
// import {useState} from 'react'
import {useAuth} from "../contexts/AuthContext"
import {  useNavigate } from "react-router-dom"

function Update() {

    // const {currentUser} = useAuth()
    // const { logout } = useAuth();

    // const navigate = useNavigate()

    // const logoutHandler = async () => {
    //     try {
    //         await logout()
    //         navigate('/')
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

  return (
    <div>
        <Card>
            <Card.Body className="text-center mb-4">
                <h2>
                    Profile 
                </h2>
                
                {/* <strong>Email: </strong> {currentUser.email} */}
                {/* <Button onClick={logoutHandler} h='4rem' _focus={{}} pl='1.5rem' justifyContent='flex-start' variant='ghost' color='gray.500' >Log Out</Button> */}
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default Update