import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { HashRouter } from "react-router-dom";

const root2 = ReactDOM.createRoot(
  document.getElementById(`${<App /> ? "root" : "root2"}`)
);
root2.render(
  <>
    <HashRouter>
      <App/>
    </HashRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
