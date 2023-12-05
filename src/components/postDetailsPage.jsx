import React, {useState, useEffect, useContext} from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../context";


const PosttDetailsPage = () => {
    const [postDetail, setPostDetail] = useState(null)
    const [comments, setComments] = useState([])
    const authContext = useContext(AuthContext)
    const isLogIn = authContext.isLogIn

    const params = useParams()
    const postId = params.postId
    useEffect(() => {
        fetch("https:jsonplaceholder.typicode.com/posts/" + postId)
        .then(resp => resp.json())
        .then(data => {
            setPostDetail(data)
        })
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(resp => resp.json())
        .then(data => {
            setComments(data)
        })
    },[])

    if (isLogIn === false) {
        return (
            <>
            <h1 style={{textAlign: "center"}}>You are not authorized to use this Page</h1>
            <Link to = '/posts'>Go Back</Link>
            </>
        )
    }
    return (
        <>
        {postDetail ? (
            <div  style={{display: "block", justifyContent:"center", width: "65%", margin: "0 auto"}}>
                <h2>{postDetail.title}</h2>
                <p>{postDetail.body}</p>
                <h2>Comments</h2>
                {comments.length === 0 ? (
                    <h3 style={{textAlign: "center"}}>loading...</h3>
                ) : (
                    <div>
                        {comments.map(comment => (
                           <Link to={`/posts/${postId}/${comment.id}`} key={comment.id}>
                           <h3>{comment.title}{comment.email}</h3>
                           </Link> 
                        ))}
                    </div>
                )}
                
            </div>
        ) : (
            <div>
                <h1>Loading...</h1>
            </div>
        ) }
        </>
    )
}
export default PosttDetailsPage