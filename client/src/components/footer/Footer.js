import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <section className="footer">
        <div className="social">
            <a href="#"> <FacebookOutlinedIcon></FacebookOutlinedIcon></a>
            <a href="#"> <TwitterIcon></TwitterIcon></a>
            <a href="#"> <InstagramIcon></InstagramIcon></a>
        </div>

        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <p className="Copyright">Air Quality &copy;2022</p>
    </section>
  );
   

}

export default Footer