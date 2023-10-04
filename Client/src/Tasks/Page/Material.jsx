import Goback from "../components/Goback";
import { useProduct } from "../../context/ProductContext";
import SingleProduct from "../components/SingleProduct";

const Material = () => {
  const { dataBag } = useProduct();
  return (
    <div className="main-page">
      <h3>
        We have skipped step 2, as there are no options at that step for this
        product.
      </h3>
      <h3> 3. Please select the material and finish that you require</h3>
      <div className="view-bags cha flex flex-dir">
        {dataBag?.material?.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            itTrue={true}
            className={"twist"}
          />
        ))}
        <Goback />
      </div>
    </div>
  );
};

export default Material;
