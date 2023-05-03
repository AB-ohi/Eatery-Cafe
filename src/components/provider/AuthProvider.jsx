import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = () => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(false);
        return signOut(auth)
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=> {
            console.log("user is inside ", loggedUser)
            setUser(loggedUser)
            setLoading(false);
        })

        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;