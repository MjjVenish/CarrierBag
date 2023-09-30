import { useProduct } from "../../context/ProductContext";
import Button from "./Button";

const Goback = () => {
  const { goBack } = useProduct();
  return (
    <div className="go-back">
      <Button label={"GoBack"} handleClick={goBack} />
    </div>
  );
};

export default Goback;
