import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {UserContext} from "../userContext";
import "./navigation.css";

const list = [
  {
    name: "Good Hotel",
    path: "/",
    exact: true,
    status: "all",
    className: "logo",
  },
  {
    name: "New director",
    path: "/hire/new-director",
    exact: false,
    status: "director",
  },
  {
    name: "New manager",
    path: "/hire/new-manager",
    exact: false,
    status: "director",
  },
  {
    name: "New worker",
    path: "/hire/new-worker",
    exact: false,
    status: "manager",
  },
  {
    name: "List Manager",
    path: "/list/managers",
    exact: false,
    status: "director",
  },
  {
    name: "List Worker",
    path: "/list/workers",
    exact: false,
    status: "manager",
  },
  {name: "Contact", path: "/Contact", exact: false, status: "all"},
  {
    name: "My Profile",
    path: "/profile",
    exact: false,
    status: "all",
    className: "toRight",
  },
];

export const Navigation = ({logout}: any) => {
  const {user} = useContext(UserContext);
  const {status} = user;
  const navigation = list
    .filter((item) => item.status === status || item.status === "all")
    .map((item) => (
      <li key={item.name} className={`navigationItem ${item.className}`}>
        <NavLink
          to={item.path}
          exact={item.exact ? item.exact : false}
          activeClassName="selected"
        >
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
