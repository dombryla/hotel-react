import React, {useState} from "react";
import {MsgRed} from "./msg-red";
import classNames from "classnames";
import "./input-form.css";

interface InputFormProps {
  name: string;
  // reference: React.RefObject<HTMLInputElement>;
  reference: any;
  error: boolean;
  errorMessage: string;

  type?: string;
}
export const InputForm: React.FC<InputFormProps> = ({
  name,
  reference,
  error,
  errorMessage,
  type,
}) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <label>
      {name}
      <input
        className={classNames("inputForm", {
          "inputForm__border--green": value.length > 0,
          "inputForm__border--red": error === true,
        })}
        name={name}
        ref={reference}
        type={type}
        value={value}
        onChange={handleChange}
      ></input>
      {error && <MsgRed>{errorMessage}</MsgRed>}
    </label>
  );
};
