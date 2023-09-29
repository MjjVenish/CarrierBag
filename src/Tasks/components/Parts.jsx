import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";

const Parts = ({ title, one, two, three }) => {
  const { itTrue } = useProduct();
  const [click, setClick] = useState(true);
  return (
    <>
      {!itTrue ? (
        <div className="contact">
          <h3>{title}</h3>
          <h5>{one}</h5>
          <h5>{two}</h5>
          <h5>{three}</h5>
        </div>
      ) : (
        <div className="contact">
          <h3 onClick={() => setClick(!click)}>{title}</h3>
          {click && (
            <>
              <h5>{one}</h5>
              <h5>{two}</h5>
              <h5>{three}</h5>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Parts;
