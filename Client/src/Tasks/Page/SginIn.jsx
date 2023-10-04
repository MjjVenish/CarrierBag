import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "../style/mypage.css";

const SginIn = () => {
  return (
    <>
      <nav className="log">
        <Link className="">Home</Link>
        <Link>MyAccount</Link>
      </nav>
      <main className="sgin-parent">
        <Login />
        <Register />
      </main>
    </>
  );
};

export default SginIn;
