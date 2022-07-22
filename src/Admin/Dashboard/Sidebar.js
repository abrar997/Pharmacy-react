import React from "react";
import { Links } from "../Links";
const Sidebar = () => {
  return (
    <div className="sidebar  text-light">
      <div>
        <h6 className="text-secondary  ms-4 pt-2">Dashboard</h6>
        <ul className="list-style-none">
            {Links.map((item) => {
              return (
                <li key={item.id}>
                <a href={item.url} >
                  {item.icons} {item.text}
                </a>
          </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
