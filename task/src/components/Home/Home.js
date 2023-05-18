import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="container main">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td>30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>janesmith@example.com</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
