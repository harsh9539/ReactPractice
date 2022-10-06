import React, { createContext, useState } from 'react'

export const LoginContext = createContext();



const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState('');
    return (
        <LoginContext.Provider value={{
            login,
            setLogin
        }}>
                {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
