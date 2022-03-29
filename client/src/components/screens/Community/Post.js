import React, { useState } from 'react'
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./post.css";
import axios from 'axios';
import Update from './Update';
import Share from './Share';

const Post = ({post,getPosts, setPosts}) => {
  const [openShare, setOpenShare] = useState()
  const [openModl, setOpenModl] = useState(false)
  const deletePost = () => {
    axios.delete(`http://localhost:5001/community/${post._id}`)
    .then(res => {
      console.log('DELETED', res)
      getPosts()
    })

    .catch(err => console.log(err))
  }
  
  return (
    <div id={post._id} className="all_">
   
 <div className="card1">
   <div className="thumbnail">
      <img className="IMG-posts"
       src="https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
       alt=""
       
     /> 
   </div>

   <div className="right">
     <div className="author">
        <img
         src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
         alt=""
       /> 
       <h2 className="conH2">{post.user.firstname}</h2>
     <h1 className="title">{post.title}</h1>
     </div>
     <div className="seperator">
       <p className="postP">
       {post.content} </p>
     </div>
   <div className="sit0">
     <ul className="sit">
       <li className="conLi">
         <DeleteIcon onClick={deletePost} className="deleteIcon"></DeleteIcon>
       </li>
       <li className="conLi">
         <EditIcon onClick={()=>setOpenModl(!openModl)}  className="editIcon"></EditIcon>
       </li>
       <li className="conLi">
         {" "}
         <ShareIcon onClick={()=>setOpenShare(!openShare)} className="shareIcon"></ShareIcon>
       </li>
     </ul>
   </div>
     <div className="dateSpan"> {`created at: ${post.createdAt}`}  </div>
   <div>
      {openModl && <Update post={post} setOpenModl={setOpenModl} setPosts={setPosts} openModl={openModl}/>} 
   </div>
   <div>
   {/* {openShare && <Share setOpenShare={setOpenShare} />} */}
   {openShare && <Share openShare={openShare} setOpenShare={setOpenShare}/>}
   </div>
   </div>


 </div>
 


</div>
  )
}

export default Post