import React, { useEffect, useState } from "react";
import Header from "../Page/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MainHead from "../Page/MainHead";
import ProcessNavbar from "../components/ProcessNavbar";

const PageWrapper = ({ children }) => {
  const [isTrue, setIsTrue] = useState(false);

  // useEffect(() => {
  //   const url = window.location.href;
  // }, []);
  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 1000) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewport);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewport);
    };
  }, []);
  return (
    <>
      <MainHead />
      {!isTrue && <NavBar className={"nabar"} />}
      <div className="main-parent">
        <Header />
        {isTrue && <NavBar />}
        <div className="flex">
          <ProcessNavbar />
          <div className="pad-effect">
            <h2 className="h2">Welcome to our Bespoke Packaging Wizard </h2>
            {children}
            {isTrue ? (
              <Footer className={`fle love ${isTrue ? "hei" : ""}`} />
            ) : (
              ""
            )}
          </div>
        </div>
        {!isTrue && <Footer className={"fle"} />}
      </div>
    </>
  );
};

export default PageWrapper;
