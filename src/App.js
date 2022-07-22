import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import Home from "./User/Home/Home";
import Navbars from "./components/Navbars/Navbars";
import Header from "./components/Header/Header";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Dashboard from "./Admin/Dashboard/Dashboard";
import AddProducts from "./Admin/Products/AddProducts";
// style
import "./assets/css/Sass/style.scss";
import Categ from "./Admin/Categ/Categ";
import AddCateg from "./Admin/Categ/AddCateg";

const App = () => {
  return (
    <div className="app">
      <Navbars />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="dash" element={<Dashboard />} />
        <Route path="categ" element={<Categ />} />
        <Route path="add" element={<AddCateg />} />
        <Route path="addProducts" element={<AddProducts />} />
        <Route
          path="*"
          element={
            <div className="container  m-auto  mt-3 w-75 shadow-lg  p-5 d-flex flex-column jusitfy-content-center align-items-center">
              <img
                src={require("./assets/images/not.png")}
                alt="page  Not Found"
              />
              <h3 className="notfound-h3 text-dark fw-bold mt-2 text-center">
                This page not found
              </h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
