import React from "react";
import "./input.css";

interface InputProps {
  type: string;
  name: string;
  value: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): any;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <input
      className="loginInput"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    ></input>
  );
};
