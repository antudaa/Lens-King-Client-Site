import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({
    });
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }


    // Google
    const signInWithGoogle = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, email, password);
    }



    // Github
    const githubSignUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser, 
        login, 
        logOut,
        signInWithGoogle,
        githubSignUp
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;