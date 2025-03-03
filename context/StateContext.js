import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

export function StateContext({children}){
    const [user, setUser] = useState(null);
    const [linkToken, setLinkToken] = useState(null);

    return (
        <Context.Provider value={{user, setUser, linkToken, setLinkToken}}> 
            {children}
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);