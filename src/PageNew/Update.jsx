import React from 'react'
import { Alert, Card } from 'reactstrap'
import {useState} from 'react'
import {useAuth} from "../contexts/AuthContext"

function Update() {

    const {currentUser} = useAuth()
    

  return (
    <div>
        <Card>
            <Card.Body className="text-center mb-4">
                <h2>
                    Profile 
                </h2>
                
                <strong>Email: </strong> {currentUser.email}
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default Update