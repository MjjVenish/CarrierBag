import React from "react";
import MainHead from "../Page/MainHead";
import Footer from "../components/Footer";
import Header from "../Page/Header";
import PayPal from "../components/PayPal";

const Wrapper = ({ children }) => {
  return (
    <div>
      <MainHead className={"gin"} />
      <Header />
      {children}
      <Footer className={`fle fix`} />
      <PayPal />
    </div>
  );
};

export default Wrapper;
