import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthConext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
const provider = new GoogleAuthProvider()
const [loading, setLoading] = useState(true)
const [user, setUser] =useState(null)

const createUser = (email , password) =>{
     setLoading(true)   
    return createUserWithEmailAndPassword(auth, email, password)
}
    
const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
}

//   withCredentials: true
                
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData = {email : currentUser.email}
                axios.post('https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/jwt', userData,)
                .then(res =>{
                    console.log(res.data)
                })
                .catch(error => console.log(error))
            }
            console.log('user beta',currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])





    const authInfo ={
    createUser,
    loading,
    user,
    signInUser,
    signOutUser,
    signInWithGoogle
    }
    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;