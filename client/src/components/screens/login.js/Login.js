import React, { useState } from "react";
import axios from "axios";
import './login.css'
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    const data = { email: username, password: password };
    axios.post("http://localhost:5001/user/login", data)
    .then((response) => {console.log(response.data);})
    .catch(err=>(console.log(err)))
  };
  return (
    <div className="login">
      {" "}
      <label>Username:</label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />{" "}
      <label>Password:</label>{" "}
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />{" "}
      <button onClick={login}> Login </button>{" "}
    </div>
  );
}
export default Login;

/* import React from 'react'
import './login.css'

function Login() {
  return (
    <div className="Login" id="login">
      
        <h3 class="text-center text-white pt-5"></h3>
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <form id="login-form" class="form" action="" method="post">
                  <h3 class="text-center text-info">Login</h3>
                  <div class="form-group">
                    <label for="username" class="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password" class="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="remember-me" class="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      class="btn btn-info btn-md"
                      value="submit"
                    />
                  </div>
                  <div id="register-link" class="text-right">
                    <a href="#" class="text-info">
                     
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Login */
