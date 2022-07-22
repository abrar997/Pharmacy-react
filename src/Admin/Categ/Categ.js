import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import AllCateg from "./AllCateg";

const Categ = () => {
  return (
    <div className="mt-5">
      <Row>
        <div className="col-lg-9">
          <h3 className="categ fw-bold">all Categories </h3>
        </div>
        <div className="col-lg-3">
          <button className="btn btn-danger">
            <Link to="/add" className="text-light text-decoration-none">
              Add new Category
            </Link>
          </button>
        </div>
        <AllCateg />
      </Row>
    </div>
  );
};

export default Categ;
