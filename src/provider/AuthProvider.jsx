import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const [inputEmail, setInputEmail] = useState("")

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUser = () =>{
        setLoading(true)
        toast.success("Log-Out successful")
        return signOut(auth)
    }

    const updateUserProfile =(updateData) => {
        updateProfile(auth.currentUser, updateData)
        setUser({...auth.currentUser, ...updateData})
        toast.success("Profile updated successfully")
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
        forgotPassword,
        inputEmail,
        setInputEmail
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;