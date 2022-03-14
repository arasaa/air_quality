import React, { useState } from "react";
import "./post.css";
import axios from "axios";
import PostForm from "../../PostForm";
import PostItem from "../../PostItem";


function Post() {
  const [postt, setPost] = useState([])
  const [User, setName] = useState([])
  

  const userName = () =>{
    axios({
      url: "http://localhost:5000/community",
      method: "GET",
    })
      .then((res) => {
        setPost(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }


  return (
    <> 
    <PostForm setPost={setPost} userName={userName}/>
    <PostItem postt={postt} User={User}/>
    </>
  );

}
export default Post;
