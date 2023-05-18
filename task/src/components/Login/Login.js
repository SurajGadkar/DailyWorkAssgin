import React, { useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "username") {
      setUsername(value);
    }

    if (id === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (event) => {
    if (!username || !password) {
      window.alert("Both username and password is required.");
    } else {
      if (username === userData.username && password === userData.password) {
        dispatch(loginUser(username, password));
        navigate("/");
      } else {
        window.alert(
          "Username and password does not match or not registered yet."
        );
      }
    }
  };

  //console.log(username, password);
  return (
    <div className="main">
      <Header />
      <div className="container">
        <h1 className="login"> Login </h1>
        <div className="inputs">
          <div className="p1">
            <h6>Username : </h6>
            <input
              className="fw"
              type="text"
              placeholder="Enter your username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="p1">
            <h6>password : </h6>
            <input
              className="fw"
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btnn ">
          <button className="fw p1" onClick={handleLogin}>
            {" "}
            <h5>Login </h5>
          </button>
          <div>
            Not a user? Register <a href="/register">here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
