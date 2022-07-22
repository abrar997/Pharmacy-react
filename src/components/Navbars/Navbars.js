import React, { useState, useEffect } from "react";
import { Navbar } from "reactstrap";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiMessageAlt, BiHide } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
const nav = {
  display: "none",
};
const Navbars = () => {
  const [navshow, setnavshow] = useState(true);
  function showNav() {
    if (window.scrollY > 10) {
      setnavshow(false);
    }
  }
  useEffect(() => {
    showNav();
  }, [navshow]);

  return (
    <div>
      <Navbar
        className=" navbar-top p-1 shadow text-light"
        style={navshow ? null : nav}
      >
        <div className=" ms-auto d-flex justify-content-around   ">
          <button className=" btn btn-connect me-2  text-light   ">
            <a
              className="text-decoration-none text-light"
              href="tel:+9647831190254"
            >
              call us <BsTelephoneInbound />{" "}
            </a>
          </button>
          <button className="btn btn-connect me-2  border-light text-light   ">
            Send us message <BiMessageAlt />{" "}
          </button>
          <button className="btn btn-connect me-2  border-light text-light   ">
            visit us <GoLocation />{" "}
          </button>
        </div>
        <button
          className="btn  ms-3 text-light fs-6 "
          onClick={() => setnavshow(!navshow)}
        >
          <BiHide />
        </button>
      </Navbar>
    </div>
  );
};

export default Navbars;
