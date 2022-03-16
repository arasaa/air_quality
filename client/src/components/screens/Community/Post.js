import React, { useState } from 'react'
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./post.css";
import axios from 'axios';
import Update from './Update';

const Post = ({post,getPosts, setPosts}) => {
  //const location = useLocation()
  const [openModl, setOpenModl] = useState(false)
  const deletePost = () => {
    axios.delete(`http://localhost:5000/community/${post._id}`)
    .then(res => {
      console.log('DELETED', res)
      getPosts()
    })

    .catch(err => console.log(err))
  }

  // const [updatePost, setUpdatePst] = useState()
  // const editPost = () => {
  //   axios.put(`http://localhost:5000/community/${updatePost._id}`)
  //   .then(res => setUpdatePst({
  //     updatedAt: res.data.updatedAt
  //    // console.log('EDIT', res)
  //   }))

  //   .catch(err => console.log('error from update',err))
  // }

  //const update = {title: post.title}

  
  return (
    <div>
 <div className="card1">
   <div className="thumbnail">
      <img
       src="https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
       alt=""
       className="left"
     /> 
   </div>

   <div className="right">
     <h1 className="title">{post.title}</h1>
     <div className="author">
        <img
         src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
         alt=""
       /> 
       <h2 className="conH2">{post.user.firstname}</h2>
     </div>
     <div className="seperator">
       <p className="postP">
       {post.content} </p>
     </div>
   </div>

   <div className="sit0">
     <ul className="sit">
       <li className="conLi">
         <DeleteIcon onClick={deletePost} className="deleteIcon"></DeleteIcon>
       </li>
       <li className="conLi">
         <EditIcon onClick={()=>setOpenModl(!openModl)} className="editIcon"></EditIcon>
       </li>
       <li className="conLi">
         {" "}
         <ShareIcon></ShareIcon>
       </li>
     </ul>
     <span className="dateSpan"> 3 </span>
     <span className="dateSpan"> Mars</span>
   </div>
   <div>
      {openModl && <Update post={post} setOpenModl={setOpenModl} setPosts={setPosts}/>} 
   </div>

 </div>
 


</div>
  )
}

export default Post