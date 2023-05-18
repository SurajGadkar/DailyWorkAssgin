import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

function Register() {
  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "username") {
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
            />
          </div>
          <div className="p1">
            <h6>Email : </h6>
            <input
              className="fw"
              type="email"
              placeholder="Enter your email"
              id="email"
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
            <h5>Register </h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
