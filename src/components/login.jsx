import React, {useState, useContext} from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const authContext = useContext(AuthContext)
    const setIsLogIn = authContext.setIsLogIn
    const setUserData = authContext.setUserData
    const navigate = useNavigate()

    const inputStyle = {
        display: "flex",
        flexDirection: "block",
        margin: "10px auto",
        padding: "20px",
        fontSize: "20px",
        border: "1px solid black",
        borderRadius: "5px",
        width: "40%",
        marginBottom: "10px"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.length === 0 || password.length === 0) {
            setError("input fields are required")
        } else {
            const loginData = {username: username, password: password}
            setIsLogIn(true)
            setUserData(loginData)
            console.log("loggedIn successful")
            setUsername("")
            setPassword("")
            navigate("/posts")
        }
        
    }

    return (
        <>
        <h1 style={{textAlign: "center"}}>Log In To Account</h1>
       <form>
        <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
        />

        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
        />
        {error && <h4 style={{textAlign: "center", color: "red", marginTop: "0"}}>*Both feilds are required</h4>}
        <div style={{display: "flex", justifyContent: "center"}}>
            <button style={{border: "1px solid black"}} onClick={handleSubmit}>LogIn</button>
        </div>
       </form>
        </>
    )
}
export default Login;