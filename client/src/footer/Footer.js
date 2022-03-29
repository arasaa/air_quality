import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
function Footer() {
  return (
    <section className="footer">
      <div className="social">
        <a href="https://de-de.facebook.com/">
          {" "}
          <FacebookOutlinedIcon></FacebookOutlinedIcon>
        </a>
        <a href="https://twitter.com/?lang=de">
          {" "}
          <TwitterIcon></TwitterIcon>
        </a>
        <a href="https://www.instagram.com/">
          {" "}
          <InstagramIcon></InstagramIcon>
        </a>
        <p className="Copyright">Copyright &copy;2022</p>
      </div>
    </section>
  );
   

}

export default Footer




