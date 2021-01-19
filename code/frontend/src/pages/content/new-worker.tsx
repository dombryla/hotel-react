import React, {useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {useUser} from "../../context/userContext";

import {addWorker} from "../../workerBackendFrontend";
import {Form, UserProps} from "../../components/form";
import {Modal} from "../../components/modal";

export const NewWorker: React.FC = () => {
  const user: UserProps = useUser();
  const {status} = user;
  const {pathname} = useLocation();
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const employer = user.directorId ? user.directorId : user.managerId;

  const onSubmit = async (data: UserProps) => {
    if (employer) {
      try {
        await addWorker({data, pathname, employer});
        setMessageModal("The user has been added to the database");
        setShowModal(true);
      } catch (err) {
        console.log(err);
        setMessageModal("Something went bad");
        setShowModal(true);
      }
    }
  };

  const modalClick = () => {
    setShowModal(false);
    if (status === "director") {
      history.push("/list/managers");
    } else {
      history.push("/list/workers");
    }
  };

  return (
    <>
      <Form status={status} onSubmit={onSubmit} />
      <Modal open={showModal} onClick={modalClick}>
        {messageModal}
      </Modal>
    </>
  );
};
