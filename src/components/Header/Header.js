import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import Login from "../Authentication/Login";
function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-bottom">
          <div className="container">
            <Link className=" fw-bold navbar-brand" to="#">
              Code /Mu .
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse container"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="hList ">
                  <li href="#click" className="menu">
                    <span
                      className="btn btn-outline-light menu-title   nav-item "
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categeories
                    </span>
                    <ul
                      className="menu-dropdown "
                      style={{ width: "100px", textAlign: "start" }}
                    >
                      <li>cat</li>
                      <li>dog</li>
                      <li>horse</li>
                      <li>cow</li>
                      <li>pig</li>
                    </ul>
                  </li>
                </li>
                <li className="ms-3 w-100">
                  <form action="" method="">
                    <input
                      className="input-control  position-relative "
                      type="text"
                      placeholder="search your pills ..."
                    />
                  </form>
                </li>
              </ul>
              <div className="d-flex">
                <Link to="/" className="btn ">
                  <AiOutlineHome title="Home" className="fw-bold fs-5 " />
                </Link>
                <Link to="/" className="btn position-relative">
                  <FiShoppingBag title="Your Card" className="fw-bold fs-5" />
                  <span className="position-absolute top-0 start-90 translate-middle p-1 badge rounded-pill bg-light text-dark mt-1">
                    9
                  </span>
                </Link>
                {<Login /> && localStorage.getItem("user-info") ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn text-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BsPersonCircle className="fw-bold fs-5 " />
                      <span className="mt-4 ms-2" style={{ fontSize: "14px" }}>
                        {user && user.name}
                      </span>
                    </button>
                    <ul className="dropdown-menu bg-secondary ">
                      <li>
                        <Link className="dropdown-item" to="/">
                          Profile
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/">
                          Your Card
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="btn dropdown-item"
                          to="/"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="ms-3">
                    <Link to="/signup">
                      <button className="btn me-2 btn-outline-light">
                        new account
                      </button>
                      <Link to="/login">
                        <button className="btn btn-outline-light">login</button>
                      </Link>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Header;
