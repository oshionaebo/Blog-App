import React, {useState} from "react";

const PostForm = (props) => {
    const addPost = props.addPost
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

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
        addPost(title, body)
        setTitle("")
        setBody("")
    }

    return (
        <>
       <form>
        <input
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
        />

        <input
        type="text"
        placeholder="Enter Post Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={inputStyle}
        />
        <div style={{display: "flex", justifyContent: "center"}}>
            <button style={{border: "1px solid black"}} onClick={handleSubmit}>Add Post</button>
        </div>
       </form>
        </>
    )
}
export default PostForm;