import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetailsPage = () => {
    const [userDetail, setUserDetail] = useState(null)
    const params = useParams()
    const userId = params.userId

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        setUserDetail(data)
        })
    },[])

   
   
    return (
        <>
        <h1 style={{textAlign: "center"}}>Users Details</h1>
        {userDetail ? (
             <div style={{width: "30%",margin: "0 auto", textAlign: "center",}}>
           <h2 style={{border: "2px solid black", margin: "0"}}>ID:  {userDetail.id}</h2>
           <h2 style={{border: "2px solid black", margin: "0"}}>USERNAME:  {userDetail.username}</h2>
           <h2 style={{border: "2px solid black",  margin: "0"}}>EMAIL:  {userDetail.email}</h2>
           <h2 style={{border: "2px solid black", margin: "0"}}>ADDRESS:   {userDetail.address.street}</h2>
           <h2 style={{border: "2px solid black",  margin: "0"}}>SUITE:  {userDetail.address.suite}</h2>
           <h2 style={{border: "2px solid black",  margin: "0"}}>CITY:   {userDetail.address.city}</h2>
           <h2 style={{border: "2px solid black",  margin: "0"}}>ZIPCODE:   {userDetail.address.zipcode}</h2>
           <h2 style={{border: "2px solid black",  margin: "0"}}>LAT:   {userDetail.address.geo.lat}</h2>
           <h2 style={{border: "2px solid black", margin: "0"}}>LNG  {userDetail.address.geo.lng}</h2>
          </div>
           
        ) : (
            <div>
                <h1 style={{textAlign: "center"}}>This is the Details Page</h1>
               <h1>Loading...</h1>
            </div>
        )}
        </>
    )
    
}
export default UserDetailsPage;