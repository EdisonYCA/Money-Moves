import React, {createContext, useContext, useState, useEffect} from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { auth } from '@/library/firebaseConfig';

const Context = createContext();

export function StateContext({children}){
    const [user, setUser] = useState(null);
    const [linkToken, setLinkToken] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onIdTokenChanged(auth, (user) => {
    //         if (user) {
    //             console.log(auth)
    //             setUser(user);
    //         } else {
    //             setUser(null);
    //         }
    //     })
    //     return () => unsubscribe();
    // }, [])

    return (
        <Context.Provider value={{user, setUser, linkToken, setLinkToken}}> 
            {children}
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);