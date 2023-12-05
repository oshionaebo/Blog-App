import React, { createContext, useState} from "react";

export const AuthContext = createContext()

const AuthProvider = (props) => {
    const [isLogIn, setIsLogIn] = useState(false)
    const [userData, setUserData] = useState({})
    const [welcome, setWelcome] = useState("userData")
    const children = props.children

    return (
        <>
        <AuthContext.Provider value={{isLogIn: isLogIn, setIsLogIn: setIsLogIn, userData: userData, setUserData: setUserData}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default AuthProvider
