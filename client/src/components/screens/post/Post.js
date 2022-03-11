import React, { useState } from "react";
import "./post.css";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";


function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 // const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const poste = { title, content};
    console.log(poste);
    //request to backend
    axios({
      url: "http://localhost:5000/community",
      method: "POST",
      data: poste,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="postForm" onSubmit={submitHandler}>
        <h1 className="postH1">Share your expires</h1>
        <label className="postLabel">Title</label>
        <input
          type="text"
          required
          placeholder="title"
          className="postInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="postLabel">Description</label>
        <textarea
          placeholder="Post your experience here..."
          required
          className="postText textArea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <img src="#" className="postImg" alt="post" />

        <button className="postBtn postButton"> post</button>
      </form>

      <hr />
      <div className="card1">
        <div className="thumbnail">
          <img
            src="https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="left"
          />
        </div>

        <div className="right">
          <h1 className="title">
            {title}
          </h1>
          <div className="author">
            <img
              src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2 className="conH2">bright</h2>
          </div>
          <div className="seperator">
            <p className="postP">
             {content}
            </p>
          </div>
        </div>

        <div className="sit0">
          <ul className="sit">
            <li className="conLi">
              <DeleteIcon></DeleteIcon>
            </li>
            <li className="conLi">
              <EditIcon></EditIcon>
            </li>
            <li className="conLi">
              {" "}
              <ShareIcon></ShareIcon>
            </li>
          </ul>
          <span className="dateSpan"> 3 </span>
          <span className="dateSpan"> Mars</span>
        </div>
      </div>
    </>
  );
}

export default Post;
