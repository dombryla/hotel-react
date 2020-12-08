import React from "react";
import {NavLink} from "react-router-dom";
import "./navigation.css";

export const Navigation: React.FC = () => {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li className="navigationItem logo">
            <NavLink to="/" exact activeClassName="selected">
              good hotel
            </NavLink>
          </li>
          <li className="navigationItem">
            <NavLink to="/hire/new-director" activeClassName="selected">
              New director
            </NavLink>
          </li>
          <li className="navigationItem">
            <NavLink to="/hire/new-manager" activeClassName="selected">
              New manager
            </NavLink>
          </li>
          <li className="navigationItem">
            <NavLink to="/hire/new-worker" activeClassName="selected">
              New worker
            </NavLink>
          </li>
          <li className="navigationItem">
            <NavLink to="/list/managers" activeClassName="selected">
              List manager
            </NavLink>
          </li>
          <li className="navigationItem">
            <NavLink to="/list/workers" activeClassName="selected">
              List worker
            </NavLink>
          </li>
          <li className="navigationItem">
            <NavLink to="/contact" activeClassName="selected">
              Contact
            </NavLink>
          </li>
          <li className="navigationItem toRight">
            <NavLink to="/profile" activeClassName="selected">
              My profile
            </NavLink>
          </li>
          <li className="navigationItem">Logout</li>
        </ul>
      </nav>
    </>
  );
};
