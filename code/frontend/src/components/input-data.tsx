import React from "react";
import {MsgRed} from "./msg-red";
import "./input-data.css";

interface InputDataProps {
  name: string;
  title: string;
  reference: any;
  error: boolean;
  errorMessage: string;
  defaultValue?: string;
}

export const InputData: React.FC<InputDataProps> = ({
  name,
  reference,
  title,
  error,
  errorMessage,
  defaultValue,
}) => {
  return (
    <div className="inputFormDataContainer">
      <label htmlFor={name}>{title} </label>
      <div className="inputFormData">
        <input
          type="date"
          name={name}
          ref={reference}
          defaultValue={defaultValue}
        />
        {error ? <MsgRed>{errorMessage}</MsgRed> : <MsgRed>{"   "}</MsgRed>}
      </div>
    </div>
  );
};
