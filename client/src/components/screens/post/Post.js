import React, { useState } from 'react'
import './post.css'
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <span className="s1">subscribe</span>
      <span className="s2">subscribe</span>
    </div>
    <div className="card">
      <div className="thumbnail">
        <img src="https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="left" />

      </div>

      <div className="right">
        <h1 className="conH1">lorem10 loremloremloremloremloremloremloremloremloremloremlorem</h1>
        <div className="author">
          <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          <h2 className="conH2">Bright</h2>
        </div>
          <div className="seperator" ></div>
          <p className="conP">
             text text text text text text text text text text text texttext text text texttext text
          text texttext texttext texttext texttext texttext texttext texttext text
          text texttext texttext texttext text
          </p>
      </div>
      <h5 className="conH5">3</h5>
      <h6 className="conH6">Mars</h6>
      <ul className="conUl">
        <li className="conLi"><i className="far fa-eye fa-2x"></i></li>
        <li className="conLi"><i className="far fah-heart fa-2x"><DeleteIcon></DeleteIcon></i></li>
        <li className="conLi"><i className="far fa-envelope fa-2x"><EditIcon></EditIcon></i></li>
        <li className="conLi"><i className="far fa-share-alt fa-2x"> <ShareIcon></ShareIcon></i></li>
      </ul>
    </div>
  </>
  )
}

export default Post