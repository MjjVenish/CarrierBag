import { Link } from "react-router-dom";

const NavBar = (className) => {
  return (
    <nav className={`flex home-nav ${className}`}>
      <Link>Home</Link>
      <Link>Printed Packaging</Link>
      <Link className="actives"> Print Quote Wizard</Link>
    </nav>
  );
};

export default NavBar;
