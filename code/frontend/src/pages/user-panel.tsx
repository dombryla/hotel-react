import React from "react";
import {Navigation} from "./navigation";
import {Content} from "./content/content";

export const UserPanel: React.FC = () => {
  return (
    <>
      <Navigation />
      <Content />
      <div>Footer</div>
    </>
  );
};
