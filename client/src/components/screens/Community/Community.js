import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostForm from './PostForm';
import PostList from './PostList';

const Community = () => {


const [posts, setPosts] = useState([])
  /////////////////////////////////////////////////////////////////////////
  const getPosts = () =>{
    axios({
      url: "http://localhost:5000/community",
      method: "GET",
    })
      .then((res) => {
        setPosts(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    ///////////////////////////////////////////////////////////////////////
    useEffect(()=>{
        getPosts()
    },[])
  //////////////////////////////////////////////////////////////////////////
  const [form, setForm] = useState({title: "", content: ""})
  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
  }
  /////////////////////////////////////////////////////////////////////////
  const submitHandler = (e) => {
    e.preventDefault();
    //request to backend
    axios({
      url: "http://localhost:5000/community",
      method: "POST",
      data: form,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///////////////////////////////////////////////////////////////////////
  
  return (
    <div>
      <PostForm submitHandler={submitHandler} handleChange={handleChange} form={form}/>
      <PostList posts={posts} getPosts={getPosts} form={form}
      handleChange={handleChange} setPosts={setPosts}
      />
    </div>
  )
}

export default Community