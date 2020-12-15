import React from "react";
import {Navigation} from "./navigation";
import {Content} from "./content/content";

import "./user-panel.css";

export const UserPanel = ({logout}: any) => {
  return (
    <>
      <div className="userPanelContainer">
        <Navigation logout={logout} />
        <Content />
      </div>
    </>
  );
};
