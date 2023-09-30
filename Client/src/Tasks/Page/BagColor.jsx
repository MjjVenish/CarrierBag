import Goback from "../components/Goback";
import { useProduct } from "../../context/ProductContext";
import SingleProduct from "../components/SingleProduct";

const BagColor = () => {
  const { dataBag } = useProduct();
  return (
    <>
      <div className="main-page">
        <h3>
          We have skipped steps 2, 3, and 4, as there are no options at these
          steps for this product.
        </h3>
        <h4>5. What colour bag would you like?</h4>
        <div className="view-bags">
          {dataBag?.bagColour?.map((product) => (
            <SingleProduct key={product.id} product={product} itTrue={true} />
          ))}
          <Goback />
        </div>
      </div>
    </>
  );
};

export default BagColor;
