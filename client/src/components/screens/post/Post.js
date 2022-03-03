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

      <img src="http://" className="postImg" alt="post picture"/>

      <button className="postBtn postButton"> post</button>
    </form>

    <hr />

    <div className="fond">
      <span className="s1">share</span>
    </div>
    <div className="card">
      <div className="thumbnail">
        <img src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?s=612x612" alt="" className="left" />

      </div>
      <div className="right">
        <h1>lorem10 loremloremloremloremloremloremloremloremloremloremlorem</h1>
        <div className="author">
          <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          <h2>Bright</h2>
        </div>
          <div className="seperator" ></div>
          <p>
             text text text text text text text text text text text texttext text text texttext text
          text texttext texttext texttext texttext texttext texttext texttext text
          text texttext texttext texttext text
          </p>
      </div>
    </div>

  </>
  )
}

export default Post