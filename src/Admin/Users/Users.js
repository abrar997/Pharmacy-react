import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [datas, setdata] = useState([]);
  function getAll() {
    axios
      .get("http://localhost:8000/api/all")
      .then((data) => setdata(data.data));
    // setdata(datas.json());
    // console.log("data", data);
  }
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className=" p-2 m-auto users-table" >
      <h3 className="mt-2 mb-3  fw-bold  "> all users </h3>
      <table className="table table-striped border shadow p-5 ">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">age</th>
            <th scope="col">phone</th>
            <th scope="col">location</th>
            <th scope="col">type</th>
            <th scope="col">update</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((items) => {
            return (
              <tr key={items.id} className='data'>
                <th scope="row">{items.id}</th>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.age}</td>
                <td>{items.phone}</td>
                <td>{items.location}</td>
                <td>{items.type}</td>
                <td>
                  <Link to="/">
                    <button className="btn btn-success"> update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
