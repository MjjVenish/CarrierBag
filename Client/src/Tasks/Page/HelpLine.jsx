import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dash from "../../assets/seperator.png";

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
      <a href="*" className="ll">
        Order Helpline: 020-3002-9960
      </a>
      {isTrue ? (
        <>
          <Link to={"/mypage"}>Re-Order Now</Link>
          <img src={dash} alt="" />
          <a href="*">Blog</a>
          <img src={dash} alt="" />
          <a href="*">Printed Packaging</a>
          <img src={dash} alt="" />
          <a href="*">Track Order</a>
          <img src={dash} alt="" />
          <a href="*"> Login/Register</a>
        </>
      ) : (
        <div className="hel">
          <Link to={"/mypage"}>Re-Order Now</Link>
          <img src={dash} alt="" />
          <a href="*">Blog</a>
          <img src={dash} alt="" />
          <a href="*">Printed Packaging</a>
          <img src={dash} alt="" />
          <a href="*">Track Order</a>
          <img src={dash} alt="" />
          <a href="*" className="lo">
            {" "}
            Login / Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default HelpLine;
