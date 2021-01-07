import React from "react";
import "./submit-button.css";

interface DeleteButtonProps {
  handleDelete(workerId: number): any;
  children: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  children,
  handleDelete,
}) => {
  return <button className="submitButton">{children}</button>;
};
