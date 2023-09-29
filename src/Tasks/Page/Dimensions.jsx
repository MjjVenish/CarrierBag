import Goback from "../components/Goback";
import { useProduct } from "../../context/ProductContext";
import SingleProduct from "../components/SingleProduct";

const Dimensions = () => {
  const { dataBag } = useProduct();
  return (
    <div className="main-page">
      <h3>
        We have skipped steps 2, 3, 4, 5, 6, and 7, as there are no options at
        these steps for this product.
      </h3>
      <h4>8. What size of bag do you need?</h4>
      <div className="view-bags">
        {dataBag?.dimensions?.map((product) => (
          <SingleProduct key={product.id} product={product} itTrue={true} />
        ))}
        <Goback />
      </div>
    </div>
  );
};

export default Dimensions;
