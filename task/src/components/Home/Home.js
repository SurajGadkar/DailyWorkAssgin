import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userAction";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Welcome, {userData.username} !</h1>
      <div className="container main">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.username}</td>
              <td>{userData.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
