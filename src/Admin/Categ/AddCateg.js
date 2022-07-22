import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

const AddCateg = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  let items = { name, company };
  let navigate = useNavigate();
  async function handleForm(e) {
    e.preventDefault();
    let result = await fetch("http://localhost:8000/api/add", {
      method: "POST",
      body: JSON.stringify(items),

      //   add this instead of json.parse
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    result = await result.json();

    console.log("result", result);
    // CONVERT DATA TO JSON AND SAVE IT AS JSON OBJECT
    // SAVE IT IN LOCALSTORAGE TO USE IT AS U Want
    // localStorage.setItem("user-info", JSON.stringify(result));
    // if (localStorage.getItem("user-info")) {
    navigate("/dash");
    // }
  }

  return (
    <div className="mt-3 add-categ">
      <Container>
        <form className="form w-50 m-auto p-4 shadow" onSubmit={handleForm}>
          <h3 className="fw-bold text-center text-success">Add new Category</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>
          <button
            type="submit"
            onClick={handleForm}
            className="btn btn-success"
          >
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default AddCateg;
