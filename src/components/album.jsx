import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context";

const Album = () => {
    const [albums, setAlbums] = useState([])

    const authContext = useContext(AuthContext)
    const isLogIn = authContext.isLogIn

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums", {
            method: "GET",
            header: {"content-type" : "application/json"},
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setAlbums(data.slice(0, 20))
        })
    },[])

    if (isLogIn === false) {
        return (
            <Navigate to = '/login' replace/>
        )
    }

    return (
        <>
        <h1 style={{textAlign: "center"}}>All Albums</h1>
        {albums.length === 0 ? (
            <div>
               <h1 style={{textAlign: "center"}}>loading....</h1>
            </div>
        ) : (
            <div>
           {albums.map(album => (
             <Link to={"/albums/" + album.id} key={album.id} >
                <div style={{width: "65%", margin: "0 auto", borderRadius: "5px", border: "1px solid black", cursor: "pointer", textAlign: "center"}}>
                    <h2>{album.title}</h2>
                </div>
                 </Link>
           ))}
           </div>
        )}
        </>
    )
}
export default Album;