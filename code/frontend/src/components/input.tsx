import React from "react";
import "./input.css";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({type, name, placeholder}) => {
  return (
    <input
      className="loginInput"
      type={type}
      name={name}
      placeholder={placeholder}
    ></input>
  );
};
