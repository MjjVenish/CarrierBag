import { useState, useEffect } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import ProcessNavbar from "../components/ProcessNavbar";
import { useProduct } from "../../context/ProductContext";
import { BsBag } from "react-icons/bs";

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
            <AiOutlineUnorderedList
              onClick={() =>
                setIsTrue((pre) => ({ ...pre, option: !pre.option }))
              }
              className=""
            />
            {!itTrue && <span>Menu</span>}
          </div>
          <div className="search relative">
            <input type="text" placeholder="E.g. Red Papper Bags,Jute Bags " />
            <IoMdSearch className="absolute sea-icon" />
          </div>
          {!itTrue && (
            <div className="op flex">
              <BsBag />
              <p style={{ color: "#000" }}>Basket(0)</p>
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
