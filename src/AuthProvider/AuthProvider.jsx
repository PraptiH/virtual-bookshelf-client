import React, { useEffect, useState } from 'react';
import {AuthContext} from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,user=>{
            setUser(user)
            setLoading(false)
        });
        return ()=>unsubscribe()
    },[])

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createUser2 = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    
    const userInfo = {
        user,
        createUser,
        createUser2,
        signInUser,
        logOut,
        loading
    }

    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;