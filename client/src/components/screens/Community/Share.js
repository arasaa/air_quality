import React from 'react'
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, TelegramShareButton} from "react-share";
import {FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon,} from "react-share"

const Share = ({setOpenShare}) => {
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

        <TwitterShareButton url={"https://twitter.com/" }>
        <TwitterIcon size={60} round={true} />
          
        </TwitterShareButton>

        <WhatsappShareButton url={"https://web.whatsapp.com/" }>
        <WhatsappIcon size={60} round={true} />
        </WhatsappShareButton>

        <TelegramShareButton url={"https://web.telegram.org/k/" }>
        <TelegramIcon size={60} round={true} />
        </TelegramShareButton>
    </div></div>
  )
}

export default Share