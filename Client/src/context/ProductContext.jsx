import { createContext, useContext, useState, useEffect } from "react";
import "../Tasks/style/task.css";
import { useNavigate } from "react-router-dom";
import {
  getBagColor,
  getDimesion,
  getHnadles,
  getLogo,
  getMaterial,
  getThicknees,
} from "../lib/axios/CRUD";

const productContext = createContext(null);

const ProductContext = ({ children }) => {
  const [linkHandle, setLinkHandle] = useState({
    handles: true,
    material: true,
    thickness: true,
    bagColour: true,
    logoColour: true,
    number: true,
    dimensions: true,
    quantity: true,
  });
  const [dataBag, setDataBag] = useState({
    handles: null,
    material: null,
    thickness: null,
    bagColour: null,
    logoColour: null,
    number: null,
    dimensions: null,
    quantity: null,
  });
  const navigate = useNavigate();
  const [itTrue, setItTrue] = useState(false);
  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 810) {
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

  const goBack = () => {
    setLinkHandle({
      handles: true,
      material: true,
      thickness: true,
      bagColour: true,
      logoColour: true,
      number: true,
      dimensions: true,
      quantity: true,
    });
    navigate("/");
  };
  const confirm = (value) => {
    setLinkHandle((preLink) => ({ ...preLink, handles: false }));
    getHnadles(value)
      .then((res) => {
        setDataBag((pre) => ({ ...pre, handles: res.data }));
        navigate("/handles");
      })
      .catch((err) => {
        setLinkHandle((pre) => ({ ...pre, material: false }));
        navigate("/material");
        getMaterial(value)
          .then((res) => {
            setDataBag((pre) => ({ ...pre, material: res.data }));
            navigate("/material");
          })
          .catch((err) => {
            setLinkHandle((pre) => ({ ...pre, thickness: false }));
            navigate("/thickness");
            getThicknees(value)
              .then((res) => {
                setDataBag((pre) => ({ ...pre, thickness: res.data }));
                navigate("/thickness");
              })
              .catch((err) => {
                setLinkHandle((pre) => ({ ...pre, bagColour: false }));
                navigate("/bagColor");
                getBagColor(value)
                  .then((res) => {
                    setDataBag((pre) => ({ ...pre, bagColour: res.data }));
                    navigate("/bagColor");
                  })
                  .catch((err) => {
                    setLinkHandle((pre) => ({ ...pre, logoColour: false }));
                    navigate("/logoColor");
                    getLogo(value)
                      .then((res) => {
                        setDataBag((pre) => ({ ...pre, logoColour: res.data }));
                        navigate("/logoColor");
                      })
                      .catch((err) => {
                        setLinkHandle((pre) => ({
                          ...pre,
                          dimensions: false,
                          number: false,
                        }));
                        navigate("/dimensions");
                        getDimesion(value)
                          .then((res) => {
                            setDataBag((pre) => ({
                              ...pre,
                              dimensions: res.data,
                            }));
                            navigate("/dimensions");
                          })
                          .catch((err) => {
                            setLinkHandle((pre) => ({
                              ...pre,
                              quantity: false,
                            }));
                            navigate("/quantity");
                          });
                      });
                  });
              });
          });
      });
  };
  return (
    <productContext.Provider
      value={{ linkHandle, confirm, goBack, dataBag, itTrue }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContext;

export const useProduct = () => useContext(productContext);
