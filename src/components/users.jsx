import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context";



 const Users = () => {
    const [user, setUser] = useState([])

    const authContext = useContext(AuthContext)
    const isLogIn = authContext.isLogIn
    console.log(isLogIn)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setUser(data)
        })
    },[])

    if (isLogIn === false) {
        return (
       <Navigate to={'/login'} replace/>
        )
    }
    return(
        <>
        <h1 style={{textAlign: "center"}}>this is the Users Page</h1>
        {user === 0 ? (
            <div>
                <h1>Loading</h1>
            </div>
        ) : (
            <div>
                {user.map(use => (
                    <Link to ={"/users/" + use.id} key = {use.id}>
                    <div style={{width: "65%", textAlign: "center", margin: "0 auto", border: "1px solid black", borderRadius: "5px", cursor: "pointer"}} key={user.id}>
                    <h2 key={use.id}>{use.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
        )}
        </>
    )
 }
 export default Users;