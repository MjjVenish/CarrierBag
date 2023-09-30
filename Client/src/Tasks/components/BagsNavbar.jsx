import React from "react";
import { Link } from "react-router-dom";

const BagsNavbar = () => {
  return (
    <nav className="flex bag-link">
      <Link id="red">Chirstmas</Link>
      <Link>Carrier Bags</Link>
      <Link>Paper Bags</Link>
      <Link>Take Away Carrier bags</Link>
      <Link>Jute bags</Link>
      <Link>Branded Packaging</Link>
      <Link>Gift Packaging</Link>
      <Link>Postal & Malling</Link>
      <Link>Intustrial Supplies</Link>
      <Link>Printed Packaging</Link>
    </nav>
  );
};

export default BagsNavbar;
