import React from "react";
import "./navigation.css";

export const Navigation: React.FC = () => {
  return (
    <>
      <ul className="navigation">
        <li className="navigationItem logo">good hotel</li>
        <li className="navigationItem">New director</li>
        <li className="navigationItem">New manager</li>
        <li className="navigationItem">List managers</li>
        <li className="navigationItem">Contact</li>
        <li className="navigationItem toRight">My profile</li>
        <li className="navigationItem ">Logout</li>
      </ul>
    </>
  );
};
