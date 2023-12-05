import React, {useState, useEffect, useContext} from "react";
import { Link, Navigate } from "react-router-dom";
import PostForm from "./postForm";
import PostUpdateForm from "./postUpdateForm";
import axios from "axios";
import { AuthContext } from "../context";


//https://jsonplaceholder.typicode.com/posts

const PostPage = () => {
    const [selectedPost, setSelectedPost] = useState({})
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [posts, setPosts] = useState([])

    const authContext = useContext(AuthContext)
    const userData = authContext.userData.username
    const isLogIn = authContext.isLogIn
    
    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response.data.slice(0, 20))
            setPosts(response.data.slice(0, 20))
        })
        //console.log("useEffect")
    },[])

    const addPost = (title, body) => {
       axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: title,
            body: body,
            userId: 1    
       })
       .then(response => {
        console.log(response.data)
        const newPosts = [response.data, ...posts]
        setPosts(newPosts) 
       })
       .catch((error) => {
            console.log(error)
       })
       
    }

    const handleUpdate = (post) => {
          console.log(post)
          setShowUpdateForm(true)
          setSelectedPost(post)
    }

    const handleDelete = (post) => {
        console.log(post.id)
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + post.id, {
        })
        .then(response => {
            console.log(response.data)
           const newPost = posts.filter(eachPost => eachPost.id !== post.id)
           setPosts(newPost)
        })
        console.log("Delete successfull...")
    }

    const updatePost = (title, body) => {
        console.log(title)
        console.log(body)
        setShowUpdateForm(false)
        fetch("https://jsonplaceholder.typicode.com/posts/ " + selectedPost.id, {
        method: "PUT",
        headers: {"content-Type" : "application/json"},
        body: JSON.stringify({
            title: title,
            body: body,
            userId: selectedPost.userId,
            id:selectedPost.id
        })
       })
       .then(resp => resp.json())
       .then(data => {
        console.log(data)
        //setPosts(newPosts) 
       })
       .catch((error) => {
           const updatedPost = {
            id: selectedPost.id,
            userId: selectedPost.id,
            title: title,
            body: body
           }
           const postClone = [...posts]
           const postIndex = postClone.indexOf(selectedPost)
           postClone[postIndex] = updatedPost
           setPosts(postClone)
       })
    }

    if (isLogIn === false) {
        return (
            <Navigate to = '/login'/>
        )
    }
   

    return (
        <> 
        <h1 style={{textAlign: "center"}}>Welcome Back {userData}</h1>
        {showUpdateForm === true ? (
            <div style={{display: showUpdateForm ? "block" : "none"}} className="updateModalForm">
            <PostUpdateForm
            setShowUpdateForm = {setShowUpdateForm}
            updatePost = {updatePost}
            selectedPost = {selectedPost}
            />
        </div>
        ) : (
            <div></div>
        )}
        
        <PostForm
        addPost = {addPost}
        />
        {posts.length === 0 ? (
            <h1>Loading...</h1>
        ) : (
            <div style={{width: "65%", margin: "0 auto",}}>
                <h1 style={{textAlign: "center"}}>All post</h1>
                {posts.map(post => (
                    <div style={{border: "1px solid dodgerblue", margin: "5px 0", borderRadius: "5px"}}>
                <Link to = {"/posts/" + post.id} key={post.id}>                  
                  <h2 style={{color: 'black'}}>{post.title}</h2>
                </Link>  
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button style={{margin: "0 10px", border: "1px solid black"}} onClick={() => handleUpdate(post)}>Update</button>
                    <button style={{margin: "0 10px", border: "1px solid black"}} onClick={() => handleDelete(post)}>Delete</button>
                    </div>    
           </div>
            ))}     
          </div>
        )}
            
        </>
    )
}
export default PostPage