import React, { useState } from "react";
import "./Login.css";
import Header from "../Header/Header";

function Login() {
  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "username") {
    }
  };
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
            />
          </div>
          <div className="p1">
            <h6>password : </h6>
            <input
              className="fw"
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
        </div>
        <div className="btn ">
          <button className="fw p1" onClick={handleChange}>
            {" "}
            <h5>Login </h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
