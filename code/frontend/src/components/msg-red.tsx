import React from "react";
import "./msg-red.css";

export const MsgRed: React.FC = ({children}) => {
  return <p className="msgRed">{children}</p>;
};
