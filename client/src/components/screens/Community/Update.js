import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './modal/Modal'



const Update = ({post, setOpenModl, getPosts,openModl}) => {

  const [updateForm, setUpdateForm] = useState({title: post.title, content: post.content})
  const changeHandler = (e) => {
    setUpdateForm({...updateForm, [e.target.name]:e.target.value});
  }
  const navigate = useNavigate()

    const updatePost = (e) => {
      e.preventDefault()
      console.log('_________________________________')
        axios.put(`http://localhost:5001/community/${post._id}`,updateForm)
        .then(res =>{
          setOpenModl(false)
          window.location.reload();
          navigate("/community");
        })
    
        .catch(err => console.log('error from update',err))
      }

  return (
    <>
    <Modal isOpen={openModl} close={() => setOpenModl(false)}>
    <div>
       <form className="postForm" >
        <h1 className="postH1">Edit post</h1>
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
    </Modal>

    </>
  )
}

export default Update