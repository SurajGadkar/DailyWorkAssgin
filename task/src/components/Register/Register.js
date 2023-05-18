import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/userAction";

import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "username") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  };

  const handleRegister = () => {
    if (username && email && password) {
      dispatch(registerUser(email, username, password));
      navigate("/login");
    } else {
      window.alert("All fields are required.");
    }
  };
  return (
    <div className="main">
      <Header />
      <div className="container ">
        <h1 className="register"> Register </h1>
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
            <h6>Email : </h6>
            <input
              className="fw"
              type="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              placeholder="Enter your email"
              id="email"
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
        <div className="btnn  ">
          <button className="fw p1 " onClick={handleRegister}>
            {" "}
            <h5>Register </h5>
          </button>
          <div>
            Already an user? login<a href="/login"> here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
