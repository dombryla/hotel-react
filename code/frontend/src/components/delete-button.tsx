import React from "react";
import {deleteWorker} from "../workerBackendFrontend";
import "./delete-button.css";

interface DeleteButtonProps {
  status: "director" | "manager";
  id: number | undefined;
  children: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  children,
  status,
  id,
}) => {
  return (
    <button className="deleteButton" onClick={() => deleteWorker({status, id})}>
      {children}
    </button>
  );
};
