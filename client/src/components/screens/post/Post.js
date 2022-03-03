import React, { useState } from 'react'
import './post.css'

function Post() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    const poste = {title, body};
    console.log(poste);
  }
  return (
   <>
    <form className="postForm" onSubmit={submitHandler}>
    <h1 className="postH1">Share your expires</h1>
      <label className="postLabel">Title</label>
      <input
       type="text"
       required placeholder="title"
       className="postInput"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       ></input>
      <label className="postLabel">Description</label>
      <textarea
       placeholder="description: in Berlin the weather is..."
        required className="postText"
        value ={body}
        onChange = {(e) => setBody(e.target.value)}
        ></textarea>

      <img src="http://" className="postImg"/>

      <button className="postBtn postButton"> post</button>
    </form>
  </>
  )
}

export default Post