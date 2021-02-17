import React from "react";
import {Navigation} from "./navigation";
import {Content} from "./content/content";

import "./user-panel.css";

export type UserPanelProps = {
  logout: () => void;
};
export const UserPanel: React.FC<UserPanelProps> = ({logout}) => {
  return (
    <>
      <div className="userPanelContainer">
        <Navigation logout={logout} />
        <Content />
      </div>
    </>
  );
};
