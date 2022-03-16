import React from 'react'
import {FacebookShareButton, } from "react-share";
import {
   
    FacebookIcon
  } from "react-share"

const Share = ({setOpenShare}) => {
    const shareURL = "https://www.facebook.com/"
    const shareLink = () =>{
        setOpenShare(false)
    }
    //setOpenShare()
  return (
    <div>
        <h1 className="postH1">Share</h1>
       <div>
        <FacebookShareButton url={"https://www.facebook.com/" }>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <FacebookIcon size={60} round={true}/>
        </FacebookShareButton >
    </div></div>
  )
}

export default Share