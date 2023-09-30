import React, { useEffect, useState } from "react";
import { getBagName } from "../../lib/axios/CRUD";
import SingleProduct from "../components/SingleProduct";
import { useProduct } from "../../context/ProductContext";
import data from "./data";

const Product = () => {
  const [allBags, setAllBags] = useState([]);
  const { itTrue } = useProduct();
  useEffect(() => {
    getBagName()
      .then((res) => setAllBags(res.data))
      .catch((err) => setAllBags(data));
  }, []);
  return (
    <div className="main-page">
      <h2>1.Select the product you are interested in from the list below</h2>
      <p>
        Please select one product from the list below. If you would like to
        compare more than one product, don't worry you can add up to three other
        products in total to your enquiry basket.
      </p>
      <div className="flex flex-dir view-bags">
        {allBags.map((product) => (
          <SingleProduct key={product.id} product={product} itTrue={itTrue} />
        ))}
      </div>
    </div>
  );
};

export default Product;
