import React from 'react'
import './registration.css'
const Registration = () => {
  
  return (
    <div>
<form>
  <div className="container" />
  <center>  <h1>Customer Registration Form</h1> </center>
  <hr />
  <label htmlFor="psw"><b> Firstname</b> </label>
<input type="text" name="Firstname" placeholder="Firstname" size="15" required />
<label htmlFor="psw"><b> Lastname</b> </label>
<input type="text" name="lastname" placeholder="Lastname" size="15"required />
<label htmlFor="psw"><b>email</b></label>
<input type="text" placeholder="Enter Email" name="email" id="15" required />
<label htmlFor="psw"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="15" id="Password"required/>


<label> Gender </label><br/>
<input type="radio" value="Male" name="gender" /> Male
<input type="radio" value="Female" name="gender" /> Female
<div/>
  <div>

  <label htmlFor="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*"/>
</div>

<input type="submit" value="Submit" />
</form>
</div>
  )
  }


export default Registration;