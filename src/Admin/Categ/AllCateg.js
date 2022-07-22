import React, { useState } from "react";
import axios from "axios";

const AllCateg = () => {
  const [categ, setcateg] = useState([]);

  axios
    .get("http://localhost:8000/api/all-categ")
    .then((data) => setcateg(data.data));

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">company</th>
          </tr>
        </thead>
        <tbody>
          {categ.map((items) => {
            return (
              <tr key={items.id}>
                <th scope="row">{items.id}</th>
                <td>{items.name}</td>
                <td>{items.company}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllCateg;
