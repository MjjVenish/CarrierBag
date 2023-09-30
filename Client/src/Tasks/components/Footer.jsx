import { useProduct } from "../../context/ProductContext";
import Parts from "./Parts";
import face from "../../assets/fb.png";
import insta from "../../assets/insta.jpg";
import twi from "../../assets/Tw.png";
import wiki from "../../assets/wiki.png";
import you from "../../assets/youtube.jpeg";

const Footer = ({ className }) => {
  const { itTrue } = useProduct();
  return (
    <div className={`${className}`}>
      <div className={`${!itTrue && "flex lab"}`}>
        {itTrue && <hr />}
        <Parts
          title={"Information"}
          one={"About Us"}
          two={"Delivery Information"}
          three={"Terms & Conditions"}
        />
        {itTrue && <hr />}
        <Parts
          title={"My Account"}
          one={"Track Order"}
          two={"Refer A Friend"}
          three={"Manage Password"}
        />
        {itTrue && <hr />}
        <Parts
          title={"Customer Service"}
          one={"Contact Us"}
          two={"Returns & Exchanges"}
          three={"Site Map"}
        />
        {itTrue && <hr />}
      </div>
      <footer>
        <h3 className="text-center us">Connect With Us</h3>
        <div className="with">
          <img src={face} alt="" />
          <img src={twi} alt="" />
          <img src={insta} alt="" />
          <img src={wiki} alt="" />
          <img src={you} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
