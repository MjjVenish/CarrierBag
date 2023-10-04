import React from "react";
import Goback from "../components/Goback";
import { useProduct } from "../../context/ProductContext";
import SingleProduct from "../components/SingleProduct";

const Thickness = () => {
  const { dataBag } = useProduct();
  return (
    <div className="main-page">
      <h3>
        We have skipped steps 2, and 3, as there are no options at these steps
        for this product.
      </h3>
      <h4>4. Please select your bag thickness</h4>
      <div className="view-bags cha">
        {dataBag?.Thickness?.map((product) => (
          <SingleProduct key={product.id} product={product} itTrue={true} />
        ))}
        <Goback />
      </div>
    </div>
  );
};

export default Thickness;
