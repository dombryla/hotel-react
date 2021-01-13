import React from "react";
import "./modal.css";

type ModalProps = {
  onClick: any;
  open: boolean;
};

export const Modal: React.FC<ModalProps> = ({children, onClick, open}) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div className="modal">
          {children}
          <button onClick={onClick} className="modalButton">
            ok
          </button>
        </div>
      </div>
    </>
  );
};
