import React, {useState} from "react";

const PostUpdateForm = (props) => {
    const updatePost = props.updatePost
    const selectedPost = props.selectedPost
    const setShowUpdateForm = props.setShowUpdateForm
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const inputStyle = {
        padding: "20px",
        fontSize: "20px",
        border: "1px solid black",
        borderRadius: "5px",
        width: "100%",
        marginBottom: "10px"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updatePost(title, body)
        setTitle("")
        setBody("")
    }
    const labelStyle = {
        fontSize: "20px",
        width: "100%",
        display: "block",
        textAlign: "left"
    }

    return (
        <>
        <button style={{position: "absolute", top: "10px", right: "10px", color: "red"}} onClick={() => setShowUpdateForm(false)}>X</button>
       <form style={{ width: "80%", margin: "0 auto"}}>
        <label style={labelStyle}>Title</label>
        <input
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
        />

        <label style={labelStyle}>Body</label>
        <input
        type="text"
        placeholder="Enter Post Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={inputStyle}
        />
        <div style={{marginBottom: "20px"}}>
            <button onClick={handleSubmit}>Update Post</button>
        </div>
       </form>
        </>
    )
}
export default PostUpdateForm;

