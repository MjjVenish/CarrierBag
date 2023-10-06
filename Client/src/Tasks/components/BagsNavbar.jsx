import React from "react";
import { Link } from "react-router-dom";
import CarrierBags from "../Bags/CarrierBags";
import ChristmasBags from "../Bags/ChristmasBags";
import PaperBags from "../Bags/PaperBags";
import JuteBags from "../Bags/JuteBags";
import BrandedBags from "../Bags/BrandedBags";
import TissueBags from "../Bags/TissueBags";
import Gift from "../Bags/Gift";
import Postal from "../Bags/Postal";
import Insutrial from "../Bags/Insutrial";
import Printed from "../Bags/Printed";

const BagsNavbar = () => {
  return (
    <>
      <nav className="flex bag-link">
        <Link id="red" className="hristmas">
          Chirstmas <ChristmasBags />
        </Link>
        <Link className="harrier">
          Carrier Bags <CarrierBags />
        </Link>
        <Link className="aper">
          Paper Bags <PaperBags />
        </Link>
        <Link>Take Away Carrier bags</Link>
        <Link className="ute">
          Jute bags <JuteBags />
        </Link>
        <Link className="randed">
          Branded Packaging <BrandedBags />
        </Link>
        <Link className="issue">
          Tissue Paper <TissueBags />
        </Link>
        <Link className="ift">
          Gift Packaging <Gift />
        </Link>
        <Link className="ostal">
          Postal & Malling <Postal />
        </Link>
        <Link className="nsutrial">
          Intustrial Supplies <Insutrial />
        </Link>
        <Link className="rinted">
          Printed Packaging <Printed />
        </Link>
      </nav>
    </>
  );
};

export default BagsNavbar;
