import React from "react";
import PostList from "../../PostList";
import "./post.css";
//import PostForm from "../../PostForm";


function Post() {
  //const [postt, setPost] = useState([])

  //import axios from "axios";
 // const [User, setName] = useState([])
 // const userName = () =>{
  //   axios({
  //     url: "http://localhost:5000/community",
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       setPost(res.data)
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }userName={userName} User={User}

  //<PostItem postt={postt} />
  //<PostForm  />

  return (
    <> 
    <PostList />
    </>
  );

}
export default Post;
