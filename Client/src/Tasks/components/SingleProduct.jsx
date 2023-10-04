import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import DataButton from "./DataButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = ({ product, itTrue }) => {
  const [click, setClick] = useState(false);
  const { confirm } = useProduct();
  return (
    <div onClick={() => setClick(!click)} className="bags">
      <div className="loop">
        {!itTrue && (
          <FontAwesomeIcon icon={faBriefcase} size="4x" className="fontaw" />
        )}
        <h4>{product.title}</h4>
        {click && (
          <DataButton
            label={"Confirm?"}
            handleClick={confirm}
            value={product.url}
          />
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
