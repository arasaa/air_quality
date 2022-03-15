import React, { useState } from "react";
import PostList from "../../PostList";
import "./post.css";
import axios from "axios";
//import PostForm from "../../PostForm";


function Post({post}) {
  const deletePost = (id) => {
    axios.delete(`http://localhost:5000/community/${id}`)
    .then(res => console.log('DELETED', res))
    .catch(err => console.log(err))
   
  }

  return (
    <> 
    <PostList deletePost={deletePost} />
    </>
  );

}
export default Post;
