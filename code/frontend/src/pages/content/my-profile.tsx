import React, {useState} from "react";
import {Modal} from "../../components/modal";

export const MyProfile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>MyProfile</div>
      <Modal open={showModal} onClick={() => setShowModal(false)}>
        The user has been added to the database.
      </Modal>

      <button
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
      >
        show modal
      </button>
    </>
  );
};
