import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
         setLoading(true);
        
        return signInWithEmailAndPassword(auth,email,password)
    }
   const signOutUser = () =>{
     setLoading(true);
    return signOut(auth)
   }
    // get current user info
    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
          setLoading(false);

    })

    // Clear the observer on unmount
    return () =>{
        unsubscribe();
    }
    },[])


    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;