import React, {useContext} from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const setIsLogIn = authContext.setIsLogIn
    const setUserData = authContext.setUserData

    const handleLogOut = () => {
        setIsLogIn(false)
        setUserData({})
        console.log("log out successfull")
        navigate('/')
    }

    return (
        <>
        <h2 style={{textAlign: "center"}}>Are You Sure You Want To Log out</h2>
        <button style={{display: "flex", justifyContent: "center", margin: "0 auto", border: "1px solid black",}} onClick={handleLogOut}>Yes Log Out</button>
        </>
    )
}
export default LogOut;