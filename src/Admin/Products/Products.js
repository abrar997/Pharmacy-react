import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";

const Products = () => {
  return (
    <div className="mt-5" > 
      <Row>
        <div className="col-lg-9">
          <h3 className="categ fw-bold">all Products </h3>
        </div>
        <div className="col-lg-3">
          <button className="btn btn-primary">
            <Link to="/addProducts" className="text-light text-decoration-none">
              Add new Products
            </Link>
          </button>
        </div>
      </Row>
    </div>
  );
};

export default Products;
