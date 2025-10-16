import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        console.log(email);
        console.log(password);
        
        
        return signInWithEmailAndPassword(auth,email,password)
    }
   const signOutUser = () =>{
    return signOut(auth)
   }
    // get current user info
    useEffect(()=>{
         const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);

    })

    // Clear the observer on unmount
    return () =>{
        unsubcribe();
    }
    },[])


    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;