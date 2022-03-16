import axios from 'axios'
import React, { useState } from 'react'


const Update = ({post, setOpenModl}) => {

  const [updateForm, setUpdateForm] = useState({title: "", content: ""})
  const changeHandler = (e) => {
    setUpdateForm({...updateForm, [e.target.name]:e.target.value});
  }

    const updatePost = (e) => {
      e.preventDefault()
      console.log('_________________________________')
        axios.put(`http://localhost:5000/community/${post._id}`,updateForm)
        .then(res =>{
          setOpenModl(false)
          window.location.reload();
        })
    
        .catch(err => console.log('error from update',err))
      }


  return (
    <div>
       <form className="postForm" >
        <h1 className="postH1">Share your expires</h1>
        <label className="postLabel">Title</label>
        <input
          type="text"
          name="title"
          required
          placeholder="title"
          className="postInput"
          value={updateForm.title}
          onChange={changeHandler}
        ></input>
        <label className="postLabel">Description</label>
        <textarea
          placeholder="Post your experience here..."
          required
          className="postText textArea"
          name="content"
          value={updateForm.content}
          onChange={changeHandler}
        ></textarea>

        <img src="#" className="postImg" alt="post" />

        <button className="postBtn postButton" onClick={updatePost}>Edit</button>
      </form>

    </div>
  )
}

export default Update