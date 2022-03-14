import React from 'react'
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const PostList = () => {
  
  return (
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
  )
}

export default PostList