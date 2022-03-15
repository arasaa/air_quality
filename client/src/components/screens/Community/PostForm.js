import React from 'react'

const postForm = ({getPosts}) => {
  return (
    <div>
         <div>
       <form className="postForm">
        <h1 className="postH1">Share your expires</h1>
        <label className="postLabel">Title</label>
        <input
          type="text"
          name="title"
          required
          placeholder="title"
          className="postInput"
        ></input>
        <label className="postLabel">Description</label>
        <textarea
          placeholder="Post your experience here..."
          required
          className="postText textArea"
          name="content"
        ></textarea>

        <img src="#" className="postImg" alt="post" />

        <button className="postBtn postButton"> post</button>
      </form>
      
    </div>
    </div>
  )
}

export default postForm