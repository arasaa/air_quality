import axios from 'axios';
import React, { useState } from 'react'

const PostForm = ({setPost, userName}) => {

  
  // const [content, setContent] = useState("");
  // const [title, setTitle] = useState("");
  const [form, setForm] = useState({title: "", content: ""})
  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    //const poste = { title, content };
    console.log(form);
    //request to backend
    
    axios({
      url: "http://localhost:5000/community",
      method: "POST",
      data: form,
    })
      .then((res) => {
        console.log(res);
        //setPost(res)
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  return (
    <div>
       <form className="postForm" onSubmit={submitHandler}>
        <h1 className="postH1">Share your expires</h1>
        <label className="postLabel">Title</label>
        <input
          type="text"
          name="title"
          required
          placeholder="title"
          className="postInput"
          value={form.title}
          onChange={handleChange}
        ></input>
        <label className="postLabel">Description</label>
        <textarea
          placeholder="Post your experience here..."
          required
          className="postText textArea"
          name="content"
          value={form.content}
          onChange={handleChange}
        ></textarea>

        <img src="#" className="postImg" alt="post" />

        <button className="postBtn postButton" onClick={userName}> post</button>
      </form>
    </div>
  )
}

export default PostForm

