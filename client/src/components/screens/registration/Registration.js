import React from 'react'
const Registration = () => {
  
  return (
    <div>
<form>
  <div className="container" />
  <center>  <h1>Customer Registration Form</h1> </center>
  <hr />
  <label> Firstname </label>
<input type="text" name="Firstname" placeholder="Firstname" size="15" required />
<label> Lastname: </label>
<input type="text" name="lastname" placeholder="Lastname" size="15"required />
<label for="psw"><b>email</b></label>
<input type="text" placeholder="Enter Email" name="email" id="email" required />
<label for="psw"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
<label> Gender </label><br/>
<input type="radio" value="Male" name="gender" checked /> Male
<input type="radio" value="Female" name="gender" /> Female
<div/>
  <div>
<form action="/action_page.php">
  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*"/>
  <input type="submit"/>
</form>
</div>
<label for="subject">Subject</label>
<textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
<input type="submit" value="Submit" />
</form>
</div>
  )
  }


export default Registration;