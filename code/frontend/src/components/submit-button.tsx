import React from "react";
import "./submit-button.css";

interface SubmitButtonProps {
  Click(): void;
  children: string;
}

export const SubmitButton = ({Click, children}: SubmitButtonProps) => {
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
