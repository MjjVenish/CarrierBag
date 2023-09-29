import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import Goback from "../components/Goback";
import SingleProduct from "../components/SingleProduct";
import { Navigate } from "react-router-dom";

const Handles = () => {
  const { dataBag } = useProduct();
  return (
    <>
      {dataBag?.handles[0] ? (
        <div className="main-page">
          <h3>2. Please select the handles that you want on your bag</h3>
          <div className="view-bags">
            {dataBag?.handles?.map((product) => (
              <SingleProduct key={product.id} product={product} itTrue={true} />
            ))}
          </div>
          <Goback />
        </div>
      ) : (
        <>
          <Navigate to={"/material"} />
        </>
      )}
    </>
  );
};

export default Handles;
