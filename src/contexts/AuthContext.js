import React, { useContext, useState,useEffect, createContext } from 'react'
import {auth} from '../loginApp/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, confirmPasswordReset, onAuthStateChanged} from 'firebase/auth'

  // import firebase from 'firebase'
  const AuthContext = createContext();



export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)
  
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth,email, password).user
    
      //  createUserWithEmailAndPassword(auth,email, password)
      //  currentUser =  createUserWithEmailAndPassword(auth,email, password).user
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
   
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}
