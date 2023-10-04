import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import ProcessNavbar from "../components/ProcessNavbar";
import { useProduct } from "../../context/ProductContext";
import { BsBag } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isTrue, setIsTrue] = useState({ width: false, option: false });
  const { itTrue } = useProduct();
  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 1000) {
      setIsTrue((pre) => ({ ...pre, width: true }));
    } else {
      setIsTrue(false);
    }
  };
  console.log(isTrue.width);
  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewport);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewport);
    };
  }, []);
  return (
    <header className="flex hide">
      {isTrue.option && <ProcessNavbar />}
      {isTrue.width ? (
        <div className="flex search-div" id="sticky">
          <div className="option">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() =>
                setIsTrue((pre) => ({ ...pre, option: !pre.option }))
              }
              className=""
            />
            {!itTrue && <span>Menu</span>}
          </div>
          <div className="search relative">
            <input
              type="text"
              placeholder="E.g. Red Papper Bags, Jute Bags, tissue bags"
            />
            <IoMdSearch className="absolute sea-icon" />
          </div>
          {!itTrue && (
            <div className="op flex">
              <BsBag style={{ marginRight: "5px", marginTop: "3px" }} />{" "}
              <p style={{ color: "#000" }}>Basket(0)</p>
              <RiArrowDownSLine
                style={{ marginTop: "7px", marginLeft: "5px" }}
              />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
