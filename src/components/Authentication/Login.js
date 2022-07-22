import React, { useState } from "react";
import { Row, Container } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  async function handleForm(e) {
    e.preventDefault();
    let items = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    if (email && password) {
      navigate("/");
    }
    else{
      navigate('/login')
    }
  }
  return (
    <Container>
      <div className="login">
        {/* <h2 className="fw-bold mt-4 text-center">Login</h2> */}
        <div className="w-75 border p-5 m-auto mt-5 shadow ">
          <Row>
            <div className="col-lg-6 mt-4">
              <form onSubmit={handleForm}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-login">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4">
              <h6 className="fw-bold">
                <span className="text-danger"> Or </span> login By :
              </h6>
              <button
                className="btn mt-2 border-secondary pe-4 ps-4"
                type="submit"
                onClick={handleForm}
              >
                By Google Email <FcGoogle className="fs-5" />
              </button>
              <button
                className="btn mt-3  border-secondary pe-4 ps-4"
                onClick={handleForm}
              >
                By Facebook
                <BsFacebook className="ms-4 text-primary fs-5" />
              </button>
              <p className="mt-3 fw-bold text-secondary">
                if u haven't account{" "}
                <Link to="/signup">create new account</Link>{" "}
              </p>
            </div>
            <div className="col-lg-2 mt-4">
              <img
                src={require("../../assets/images/log.jpg")}
                alt=""
                width="99%"
              />
            </div>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Login;
