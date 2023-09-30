import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HelpLine = () => {
  const [isTrue, setIsTrue] = useState(false);
  const updateStateBasedOnViewports = () => {
    if (window.innerWidth <= 1050) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewports);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewports);
    };
  }, []);
  return (
    <nav className="flex just-arrond help-line">
      <a href="*" className="">
        Order Helpline:020-3002-9960
      </a>
      {isTrue ? (
        <>
          <Link to={"/mypage"}>Re-Order Now</Link>
          <a href="*">Blog</a>
          <a href="*">Print Packaging</a>
          <a href="*">Track Order</a>
          <a href="*">Login/Register</a>
        </>
      ) : (
        <div className="hel">
          <Link to={"/mypage"}>Re-Order Now</Link>
          <a href="*">Blog</a>
          <a href="*">Print Packaging</a>
          <a href="*">Track Order</a>
          <a href="*">Login/Register</a>
        </div>
      )}
    </nav>
  );
};

export default HelpLine;
