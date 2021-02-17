import React from "react";
import {NavLink} from "react-router-dom";
import {useUser} from "../context/userContext";
import "./navigation.css";

const list = [
  {
    name: "Good Hotel",
    path: "/",
    status: "all",
    exact: true,
    className: "logo",
  },
  {
    name: "New director",
    path: "/hire/new-director",
    status: "director",
  },
  {
    name: "New manager",
    path: "/hire/new-manager",
    status: "director",
    exact: false,
  },
  {
    name: "New worker",
    path: "/hire/new-worker",
    status: "manager",
    exact: false,
  },
  {
    name: "List Manager",
    path: "/list/managers",
    status: "director",
    exact: false,
  },
  {
    name: "List Worker",
    path: "/list/workers",
    status: "manager",
    exact: false,
  },
  {name: "Contact", path: "/contact", status: "all", exact: false},
  {
    name: "My Profile",
    path: "/profile",
    status: "all",
    className: "toRight",
    exact: false,
  },
];

export const Navigation = ({logout}: any) => {
  const {status} = useUser();
  const navigation = list
    .filter((item) => item.status === status || item.status === "all")
    .map((item) => (
      <li key={item.name} className={`navigationItem ${item.className}`}>
        <NavLink to={item.path} exact={item.exact} activeClassName="selected">
          {item.name}
        </NavLink>
      </li>
    ));
  return (
    <>
      <ul className="navigation">
        {navigation}
        <button onClick={logout}>Logout</button>
      </ul>
    </>
  );
};
