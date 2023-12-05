import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CommentDetails = () => {
    const [commentDetail, setCommentDetail] = useState(null)
   
    const params = useParams()
    const commentId = params.commentId
    useEffect(() => {
        /*fetch("https:jsonplaceholder.typicode.com/comments/" + commentId)
        .then(resp => resp.json())
        .then(data => {
            setCommentDetail(data)
        })*/
        axios.get("https:jsonplaceholder.typicode.com/comments/" + commentId)
        .then(data => {
            console.log(data.data)
            setCommentDetail(data.data)
        })
       
    },[])
    return (
        <>
        {commentDetail ? (
            <div>
                <h2>{commentDetail.name}</h2>
                <p>{commentDetail.body}</p>
                <p>{commentDetail.email}</p>
               
            </div>
        ) : (
            <div>
                <h1 style={{textAlign: "center"}}>Loading...</h1>
            </div>
        ) }
        </>
    )
}
export default CommentDetails;
