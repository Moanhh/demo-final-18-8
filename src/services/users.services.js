import {db} from '../loginApp/firebase'

import {collection, getDocs, updateDoc, doc, addDoc} from 'firebase/firestore'



const userCollectionRef = collection(db, "users")

class UserDataService {
    addUser = (newUser) => {
        return addDoc(userCollectionRef, newUser)
    }

    updateUser = (uid, updatedUser) => {
        const userDoc = doc(db, "users", uid)
        return updateDoc(userDoc, updatedUser)
    }
    getUser = (uid) => {
        const userDoc = doc(db, "users", uid)
        return getDocs(userDoc)
    }

}

export default new UserDataService()