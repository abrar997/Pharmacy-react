import React, { useState} from "react";
import { Row } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [location, setLocation] = useState("");
  const [type] = useState("");
  // const [error] = useState([]);
  let navigate = useNavigate();

  async function handleform(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    let items = { name, age, email, password, phone, location, type };
    let result = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      // WANT DATA WITH JSON SHAPE
      body: JSON.stringify(items),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
 
    console.log("result", result);
    // CONVERT DATA TO JSON AND SAVE IT AS JSON OBJECT
    // SAVE IT IN LOCALSTORAGE TO USE IT AS U Want
    localStorage.setItem("user-info", JSON.stringify(result));
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }


  return (
    <Container>
      <div className="register border  shadow mt-5 w-75 m-auto">
        <Row>
          <div className="col-lg-5 p-5 ">
            <h5 className="fw-bold"> Create new account</h5>
            <form className="mt-2" onSubmit={handleform}>
              <div className="mb-3 d-flex justify-content-between">
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    age
                  </label>
                  <select
                    className="form-select form-select-sm border-none "
                    aria-label=".form-select-sm example"
                    name="age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                  >
                    <option value="">select </option>
                    <option value="15-25">15-25 </option>
                    <option value="26-46">26-46</option>
                    <option value="47-60">47-60</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between ">
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // id="exampleInputPassword1"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between ">
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // id="exampleInputPassword1"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                </div>
              </div>
              <div className="hidden-type">
                <input type="hidden" name="type" value={type} />
              </div>
              <button type="submit" className="btn btn-form">
                Submit
              </button>
            </form>
          </div>
          <div className=" p-5 mt-2 col-lg-4">
            <h6 className=" fw-bold">
              <span className="text-danger"> Or </span> SignUp By :
            </h6>
            <button className="btn mt-2 border-secondary pe-4 ps-4">
              By Google Email <FcGoogle className="fs-5" />
            </button>
            <button className="btn mt-3  border-secondary pe-4 ps-4" onClick={handleform}>
              By Facebook
              <BsFacebook className="ms-4 text-primary fs-5" />
            </button>
            <p className=" mt-2 fw-bold text-secondary">
              if u have account <Link to="/login"> click here</Link>
            </p>
          </div>
          <div className="col-lg-2 mt-5 pt-2">
            <img
              alt=""
              width="95%"
              src={require("../../assets/images/pil.png")}
            />{" "}
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Register;
