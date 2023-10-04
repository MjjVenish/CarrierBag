import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import DataButton from "./DataButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = ({ product, itTrue, className }) => {
  const [click, setClick] = useState(false);
  console.log(className);
  const { confirm } = useProduct();
  return (
    <div onClick={() => setClick(!click)} className="bags">
      <span className="bt"> </span>
      <div className={`loop ${className}`}>
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
