import React from "react";
import Goback from "../components/Goback";
import { useProduct } from "../../context/ProductContext";
import SingleProduct from "../components/SingleProduct";

const LogoColor = () => {
  const { dataBag } = useProduct();
  return (
    <div className="main-page">
      <h3>
        We have skipped steps 2, 3, 4, and 5, as there are no options at these
        steps for this product.
      </h3>
      <h4>6. How many colours would you like to print onto the bag?</h4>
      <p>
        How many colours are there in your logo / artwork? This doesn't include
        the bag colour necessarily, and if in doubt guess and once we've seen
        the artwork we'll confirm that for you.
      </p>
      <div className="view-bags">
        {dataBag?.logoColour?.map((product) => (
          <SingleProduct key={product.id} product={product} itTrue={true} />
        ))}
        <Goback />
      </div>
    </div>
  );
};

export default LogoColor;
