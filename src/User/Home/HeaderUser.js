import React from "react";
import { Container, Row } from "reactstrap";
import { AiOutlineArrowDown } from "react-icons/ai";

const HeaderDiv = () => {
  return (
    <div className="Header m-auto">
      <Container>
        <Row>
          {/* <div className="col-lg-6" */}
          <div className="col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-md-6 shadow mt-2  text-center text">
            <h1 className="fw-bold h1-wel">Welcome In ,</h1>
            <h2 className=" fw-bold ">Alrawi pharmacy </h2>
            <p className="fw-bold">
              buy your Pills from international companies
            </p>
            <button className="btn btn-scroll ">
              <AiOutlineArrowDown />
            </button>
          </div>

          <div className="col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-md-6">
            {" "}
            <img
              width="80%"
              alt=""
              src={require("../../assets/images/her1.jpg")}
              // className="shadow"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderDiv;
