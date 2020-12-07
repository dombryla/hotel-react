import React from "react";
import {Navigation} from "./navigation";

export const UserPanel: React.FC = () => {
  return (
    <>
      <Navigation />
      <div>Content</div>
      <div>Footer</div>
    </>
  );
};
