import pay from "../../assets/pay.png";
import op from "../../assets/op.png";
import { useState, useEffect } from "react";

const PayPal = () => {
  const [itTrue, setItTrue] = useState(false);
  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 780) {
      setItTrue(true);
    } else {
      setItTrue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewport);
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewport);
    };
  }, []);
  return (
    <>
      {itTrue ? (
        <div className="pay">
          <h3>Order Helpline: 020-3002-9960</h3>
          <div className="pay-div">
            <img className="visa" src={pay} alt="" />
          </div>
          <div>
            <img src={op} alt="" />
          </div>
          <p>© 2023 Rocaba Packaging Ltd T/A CarrierBagShop</p>
        </div>
      ) : (
        <div className="eppa">
          <div className="mlp">
            <div className="der">
              <h3>Order Helpline: 020-3002-9960</h3>
            </div>
            <dir className="card">
              <img className="visa" src={pay} alt="" />
            </dir>
            <div className="ayo">
              <img src={op} alt="" />
            </div>
          </div>
          <div className="cori">
            <p>© 2023 Rocaba Packaging Ltd T/A CarrierBagShop</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PayPal;
