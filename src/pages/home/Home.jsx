import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    if (!loginSuccesss) {
      navigate("/login");
    }
  }, []);
  return (
    <div>THIS IS HOME PAGE</div>
  );
};

export default Home;
