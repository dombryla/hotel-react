import React from "react";
import "./submit-button.css";

interface SubmitButtonProps {
  children: string;
}

export const Button: React.FC<SubmitButtonProps> = ({children}) => {
  return (
    <button className="submitButton" type="submit">
      {children}
    </button>
  );
};
