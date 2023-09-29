import { NavLink } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

const ProcessNavbar = () => {
  const { linkHandle } = useProduct();
  const {
    handles,
    material,
    thickness,
    bagColour,
    logoColour,
    number,
    dimensions,
    quantity,
  } = linkHandle;
  return (
    <nav className="navs flex flex-dir">
      <h2>Process</h2>
      <h1>Bag Type</h1>
      <NavLink to={"/"}>1.Product</NavLink>
      {handles ? (
        <span className="disabled-link">2.Handles</span>
      ) : (
        <NavLink to={"/handles"}>2.Handles</NavLink>
      )}
      {material ? (
        <span className="disabled-link">3.Material / Finish</span>
      ) : (
        <NavLink to={"/material"}>3.Material / Finish</NavLink>
      )}
      {thickness ? (
        <span className="disabled-link">4.Thickness</span>
      ) : (
        <NavLink to={"/thickness"}>4.Thickness</NavLink>
      )}
      <h1>Colourway</h1>
      {bagColour ? (
        <span className="disabled-link">5.Bag Colour</span>
      ) : (
        <NavLink to={"/bagColor"}>5.Bag Colour</NavLink>
      )}
      {logoColour ? (
        <span className="disabled-link">6.Logo Colour</span>
      ) : (
        <NavLink to={"/logoColor"}>6.Logo Colour</NavLink>
      )}
      {number ? (
        <span className="disabled-link">7.Number of sides</span>
      ) : (
        <NavLink to={"/number"}>7.Number of sides</NavLink>
      )}
      <h1>Size & Amount</h1>
      {dimensions ? (
        <span className="disabled-link">8.Dimensions</span>
      ) : (
        <NavLink to={"/dimensions"}>8.Dimensions</NavLink>
      )}
      {quantity ? (
        <span className="disabled-link">9.Quantity</span>
      ) : (
        <NavLink to={"/quantity"}>9.Quantity</NavLink>
      )}
    </nav>
  );
};

export default ProcessNavbar;
