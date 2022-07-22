import React from "react";
import { Row } from "reactstrap";
import Sidebar from "./Sidebar";
import Users from "../Users/Users";
import Products from "../Products/Products";
import "../assets/style.scss";
import Categ from "../Categ/Categ";
const HomeDash = () => {
  return (
    <div>
      <Row>
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-8">
          <h3 className="text-center text-secondary">Admin Dashboard</h3>
          <Users />
          <Categ/>
          <Products />
        </div>
      </Row>
    </div>
  );
};

export default HomeDash;
