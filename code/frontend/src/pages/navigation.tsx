import React from "react";
import "./navigation.css";

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="navigation">
        <div className="navigationItem logo">good hotel</div>
        <div className="navigationItem">New director</div>
        <div className="navigationItem">New manager</div>
        <div className="navigationItem">List managers</div>
        <div className="navigationItem">Contact</div>
        <div className="navigationItem toRight">My profile</div>
      </div>
    </>
  );
};
