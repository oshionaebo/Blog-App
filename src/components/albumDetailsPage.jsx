import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AlbumDetailsPage = () => {
    const [albumDetail, setAlbumDetail] = useState(null)
    const params = useParams()
    const albumId = params.albumId

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/" + albumId)
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        setAlbumDetail(data)
        })
    },[])
   
    
    return (
        <>
        {albumDetail ? (
             <div>
             <h1>{albumDetail.id}</h1>
         </div>
           
        ) : (
            <div>
                <h1>This is the Details Page</h1>
               <h1 style={{textAlign: "center"}}>Loading...</h1>
            </div>
        )}
        </>
    )
}
export default AlbumDetailsPage;