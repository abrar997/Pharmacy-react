import React, { useState } from "react";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  //

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [Categories, setCategories] = useState("");
  const [image, setImage] = useState("");
  let items = { name, price,Categories, company,  image };
  let navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    let result = await fetch("http://localhost:8000/api/add-product", {
      method: "POST",
      body: JSON.stringify(items),

      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log("result", result);
    navigate("/dash");
  }

  return (
    <div>
      <div className="mt-3 add-categ">
        <Container>
          <form
            className="form w-50 m-auto p-4 shadow"
              onSubmit={handleForm}
          >
            <h3 className="fw-bold text-center text-success">
              Add new Products
            </h3>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1"> Name</label>
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
              <label htmlFor="exampleInputEmail1">Price </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Category</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setCategories(e.target.value)}
                value={Categories}
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">product image</label>
              <input
                type="file"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setImage(e.target.value)}
                value={image}
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
    </div>
  );
};

export default AddProducts;
