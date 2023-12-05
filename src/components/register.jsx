import React, {useState} from "react";


const Register = (props) => {
    const [firstName, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

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
        console.log("loggedIn")
        setUsername("")
        setPassword("")
    }

    return (
        <>
        <h1 style={{textAlign: "center"}}>Log In To Account</h1>
       <form>
        <input
        type="text"
        placeholder="FirstName"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
        style={inputStyle}
        />

        <input
        type="text"
        placeholder="LastName"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        style={inputStyle}
        />

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

        <input
        type="password"
        placeholder="confirmpassword"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={inputStyle}
        />

        <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={inputStyle}
        />

        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
        />

        <div style={{display: "flex", justifyContent: "center"}}>
            <button style={{border: "1px solid black"}} onClick={handleSubmit}>Register</button>
        </div>
       </form>
        </>
    )
}
export default Register;