import React, {useContext} from "react";
import {Navigation} from "./navigation";
import {Content} from "./content/content";
import {UserContext} from "../userContext";

export const UserPanel = ({logout}: any) => {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Navigation logout={logout} />
      <Content />
      <div>Footer</div>
    </>
  );
};
