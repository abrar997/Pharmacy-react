import React from "react";
import { Container } from "reactstrap";
// comp
import HeaderDiv from "./HeaderUser";
import AllProducts from "../Products/AllProducts";

const Home = () => {
  return (
    <Container>
      <div className="homeUser">
        <HeaderDiv />
        <AllProducts />
      </div>
    </Container>
  );
};

export default Home;
