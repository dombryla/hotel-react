import React, {useState} from "react";
import {MsgRed} from "./msg-red";
import classNames from "classnames";
import "./input-form.css";

interface InputFormProps {
  name: string;
  reference: any;
  error: boolean;
  errorMessage: string;
  title: string;
  type?: string;
  defaultValue?: string | number;
}
export const InputForm: React.FC<InputFormProps> = ({
  name,
  reference,
  error,
  errorMessage,
  type,
  title,
  defaultValue,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="inputFormContainer">
        <label htmlFor={name}>{title}</label>
        <div>
          <input
            className={classNames("inputForm", {
              "inputForm__border--green": isActive === true,
              "inputForm__border--red": error === true,
            })}
            onFocus={() => setIsActive(true)}
            name={name}
            ref={reference}
            type={type}
            defaultValue={defaultValue}
          ></input>
          {error ? <MsgRed>{errorMessage}</MsgRed> : <MsgRed>{"   "}</MsgRed>}
        </div>
      </div>
    </>
  );
};
