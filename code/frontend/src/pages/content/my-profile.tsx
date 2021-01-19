import React, {useState} from "react";
import {useUser} from "../../context/userContext";

export const MyProfile: React.FC = () => {
  const user = useUser();
  console.log(user);
  return (
    <>
      <div>MyProfile</div>
    </>
  );
};
