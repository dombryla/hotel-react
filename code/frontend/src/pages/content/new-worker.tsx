import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {useUser} from "../../context/userContext";

import {addWorker} from "../../workerBackendFrontend";
import {Form, UserProps} from "../../components/form";
import {Modal} from "../../components/modal";

export const NewWorker: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useUser();
  const status = user.status;
  const {pathname} = useLocation();

  const employer = user.directorId ? user.directorId : user.managerId;

  const onSubmit = (data: UserProps) => {
    addWorker({data, pathname, employer});
    setShowModal(true);
  };

  return (
    <>
      <Form status={status} onSubmit={onSubmit} />
      <Modal open={showModal} onClick={() => setShowModal(false)}>
        The user has been added to the database
      </Modal>
    </>
  );
};
