import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)


let user = localStorage.getItem("token");
let isAuth = false;
if (user) {
     isAuth = true;
}
const InitializateState={
    isAuthentication:isAuth
}
export const AuthProvider = ({children}) => {
    console.log(children)
    const [isAuthenticated, setIsAuthenticated] = useState(InitializateState.isAuthentication);

    console.log("prueba auth", isAuthenticated)

    const login = () => {
        setIsAuthenticated(true)
        console.log("prueba authlogin", isAuthenticated)
    }

    const logout = () => {
        console.log("hola")
        setIsAuthenticated(false)
        console.log("prueba authlogout", isAuthenticated)
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;