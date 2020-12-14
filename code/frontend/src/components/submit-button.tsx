import React from "react";
import "./submit-button.css";

interface SubmitButtonProps {
  Click?: any;
  children: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  Click,
  children,
}) => {
  return (
    <button
      className="submitButton"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        Click();
      }}
    >
      {children}
    </button>
  );
};
