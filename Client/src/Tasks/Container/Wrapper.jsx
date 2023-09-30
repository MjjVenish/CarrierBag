import React from "react";
import MainHead from "../Page/MainHead";
import Footer from "../components/Footer";
import Header from "../Page/Header";

const Wrapper = ({ children }) => {
  return (
    <div>
      <MainHead />
      <Header />
      {children}
      <Footer className={`fle fix`} />
    </div>
  );
};

export default Wrapper;
