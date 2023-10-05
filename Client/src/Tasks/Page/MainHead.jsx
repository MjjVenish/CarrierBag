import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import HelpLine from "./HelpLine";
import CarrierShop from "../components/CarrierShop";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import BagsNavbar from "../components/BagsNavbar";
import { useNavigate } from "react-router-dom";
import rating from "../../assets/rating.png";
import sing from "../../assets/sing.png";
import bag from "../../assets/bag-p.png";
import user from "../../assets/user.png";

const MainHead = ({ className }) => {
  const [itTrue, setItTrue] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();
  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 810) {
      setItTrue(true);
    } else {
      setItTrue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewport);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewport);
    };
  }, []);
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
    <div className="">
      <div className="flex just he-main">
        <h3>Excellent </h3>
        <img className="rating" src={rating} alt="" />
        {!itTrue && (
          <>
            <span>{"8,279 reviews on "}</span>
            <img className="sing" src={sing} alt="" />
          </>
        )}
      </div>
      {!itTrue ? (
        <HelpLine />
      ) : (
        <div className="icons-top flex just-arrond items-center">
          <FaHome className="size-ic" />
          <GoMail className="size-ic" />
          <IoIosCall className="size-ic" />
          <img src={bag} className="size-ic" alt="" />
          <img src={user} alt="" onClick={() => navigate("/mypage")} />
        </div>
      )}
      <div className={`flex ${className} items-center logo just-between`}>
        <CarrierShop />
        {!isTrue && (
          <>
            <div className="search ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="E.g. Red Papper Bags,Jute Bags, tissue paper, g "
                />
                <IoMdSearch className="absolute sea-icon" />
              </div>
            </div>
            <div className="op flex">
              <BsBag
                style={{
                  marginRight: "7px",
                  color: " #4e9b44",
                }}
              />
              <p style={{ color: "#414141" }}>Basket (0)</p>
              <RiArrowDownSLine
                style={{
                  marginTop: "10px",
                  marginLeft: "5px",
                  fontSize: "medium",
                  color: "#414141",
                }}
              />
            </div>
          </>
        )}
        {itTrue && (
          <div className="noti">
            <div className="lock"></div>
            <div className="key text-center">
              <span>0</span>
            </div>
          </div>
        )}
      </div>
      {!isTrue && <BagsNavbar />}
    </div>
  );
};

export default MainHead;
