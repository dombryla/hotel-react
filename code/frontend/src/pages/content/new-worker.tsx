import React, {useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {useUser} from "../../context/userContext";
import {addWorker} from "../../workerBackendFrontend";
import {Form} from "../../components/form";
import {Modal} from "../../components/modal";
import {getEmployerId, setEmployer, User} from "../../model/user";

export const NewWorker: React.FC = () => {
  const user = useUser();
  const {status} = user;
  const {pathname} = useLocation();
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const employerId = getEmployerId(user);

  const onSubmit = async (newWorker: User) => {
    if (employerId == null) return;
    try {
      await addWorker({
        newWorker: setEmployer(newWorker, employerId),
        pathname,
      });
      setMessageModal("The user has been succesfully added to the database");
      setShowModal(true);
    } catch (err) {
      console.log(err);
      setMessageModal("Something went bad");
      setShowModal(true);
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
