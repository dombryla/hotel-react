import React from "react";
import {MsgRed} from "./msg-red";
import "./input-data.css";

interface InputDataProps {
  name: string;
  title: string;
  reference: any;
  error: boolean;
  errorMessage: string;
}

export const InputData: React.FC<InputDataProps> = ({
  name,
  reference,
  title,
  error,
  errorMessage,
}) => {
  return (
    <div className="inputFormDataContainer">
      <label htmlFor={name}>{title} </label>
      <div className="inputFormData">
        <input type="date" name={name} ref={reference} />
        {error ? <MsgRed>{errorMessage}</MsgRed> : <MsgRed>{"   "}</MsgRed>}
      </div>
    </div>
  );
};
