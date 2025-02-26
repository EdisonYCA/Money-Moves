import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

export function StateContext({children}){
    const [user, setUser] = useState(null);

    return (
        <Context.Provider value={{user, setUser}}> 
            {children}
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);