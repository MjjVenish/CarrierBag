import { Route, Routes } from "react-router-dom";
import PageWrapper from "../Tasks/Container/PageWrapper";
import Product from "../Tasks/Page/Product";
import Handles from "../Tasks/Page/Handles";
import Material from "../Tasks/Page/Material";
import BagColor from "../Tasks/Page/BagColor";
import LogoColor from "../Tasks/Page/LogoColor";
import NumbersSlide from "../Tasks/Page/NumbersSlide";
import Dimensions from "../Tasks/Page/Dimensions";
import Quantity from "../Tasks/Page/Quantity";
import Thickness from "../Tasks/Page/Thickness";
import Wrapper from "../Tasks/Container/Wrapper";
import SginIn from "../Tasks/Page/SginIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <PageWrapper>
            <Product />
          </PageWrapper>
        }
      />
      <Route
        path="/handles"
        element={
          <PageWrapper>
            <Handles />
          </PageWrapper>
        }
      />
      <Route
        path="/material"
        element={
          <PageWrapper>
            <Material />
          </PageWrapper>
        }
      />
      <Route
        path="/thickness"
        element={
          <PageWrapper>
            <Thickness />
          </PageWrapper>
        }
      />
      <Route
        path="/bagColor"
        element={
          <PageWrapper>
            <BagColor />
          </PageWrapper>
        }
      />
      <Route
        path="/logoColor"
        element={
          <PageWrapper>
            <LogoColor />
          </PageWrapper>
        }
      />
      <Route
        path="/number"
        element={
          <PageWrapper>
            <NumbersSlide />
          </PageWrapper>
        }
      />
      <Route
        path="/dimensions"
        element={
          <PageWrapper>
            <Dimensions />
          </PageWrapper>
        }
      />
      <Route
        path="/quantity"
        element={
          <PageWrapper>
            <Quantity />
          </PageWrapper>
        }
      />
      <Route
        path="/mypage"
        element={
          <Wrapper>
            <SginIn />
          </Wrapper>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
