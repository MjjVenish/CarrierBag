import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const Parts = ({ title, one, two, three }) => {
  const { itTrue } = useProduct();
  const [click, setClick] = useState(true);
  return (
    <>
      {!itTrue ? (
        <div className="contact">
          <h3>
            {title} <RiArrowUpSLine className="up-down" />
          </h3>
          <h4>{one}</h4>
          <h4>{two}</h4>
          <h4>{three}</h4>
        </div>
      ) : (
        <div className="contact">
          <h3
            onClick={() => setClick(!click)}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {title}{" "}
            {click ? (
              <RiArrowUpSLine className="up-down" />
            ) : (
              <RiArrowDownSLine className="up-down" />
            )}
          </h3>
          {click && (
            <>
              <h4>{one}</h4>
              <h4>{two}</h4>
              <h4>{three}</h4>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Parts;
