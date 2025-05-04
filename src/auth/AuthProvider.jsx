import React, { createContext } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({Children}) => {





    
    return (
        <AuthContext.Provider value={authInfo}>
            {
                Children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;