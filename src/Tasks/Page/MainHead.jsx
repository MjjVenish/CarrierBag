import React, { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaHome, FaUser } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import HelpLine from "./HelpLine";
import CarrierShop from "../components/CarrierShop";
import { BsBag } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import BagsNavbar from "../components/BagsNavbar";
import { useNavigate } from "react-router-dom";

const MainHead = () => {
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
    <div>
      <div className="flex just he-main">
        <h3>
          Excellent <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />{" "}
          {!itTrue && "8,279 Reviews on TrustPilot"}
        </h3>
      </div>
      {!itTrue ? (
        <HelpLine />
      ) : (
        <div className="icons-top flex just-arrond items-center">
          <FaHome className="size-ic" />
          <GoMail className="size-ic" />
          <IoIosCall className="size-ic" />
          <MdShoppingBag className="size-ic" />
          <FaUser className="size-ic" onClick={() => navigate("/mypage")} />
        </div>
      )}
      <div className="flex items-center logo just-between">
        <CarrierShop />
        {!isTrue && (
          <>
            <div className="search relative">
              <input
                type="text"
                placeholder="E.g. Red Papper Bags,Jute Bags "
              />
              <IoMdSearch className="absolute sea-icon" />
            </div>
            <div className="op flex">
              <BsBag />
              <p style={{ color: "#000" }}>Basket(0)</p>
            </div>
          </>
        )}
        {itTrue && <BsBag className="noti" />}
      </div>
      {!isTrue && <BagsNavbar />}
    </div>
  );
};

export default MainHead;
