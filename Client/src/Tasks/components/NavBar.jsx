import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
const NavBar = (className) => {
  return (
    <nav className={`flex home-nav ${className}`}>
      <Link>Home</Link>
      <RiArrowRightSLine className="arr" />
      <Link>Printed Packaging</Link>
      <RiArrowRightSLine className="arr" />
      <Link className="actives"> Print Quote Wizard</Link>
    </nav>
  );
};

export default NavBar;
