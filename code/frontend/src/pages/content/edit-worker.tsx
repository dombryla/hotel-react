import React, {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {useUser} from "../../context/userContext";

import {getEditWorkerData, editWorker} from "../../workerBackendFrontend";
import {Form, UserProps} from "../../components/form";
import {Modal} from "../../components/modal";

export const EditWorker: React.FC = () => {
  const {status} = useUser();
  const [worker, setWorker] = useState<UserProps>();
  const {pathname} = useLocation();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    getEditWorkerData({status, pathname}).then((data) => {
      setWorker(data[0]);
      setLoading(false);
    });
  }, [status, pathname]);

  const onSubmit = async (data: UserProps) => {
    data.status = status;
    try {
      await editWorker({data, pathname});
      setShowModal(true);
      setMessageModal("The data of user has been succesfully edited");
    } catch (err) {
      throw Error(err);
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

  if (loading === true) {
    return <div>loading...</div>;
  }
  if (worker === undefined) {
    return <div>The data of user couldn't be downloaded</div>;
  }

  return (
    <>
      <Form worker={worker} onSubmit={onSubmit} status={status} />;
      <Modal open={showModal} onClick={modalClick}>
        {messageModal}
      </Modal>
    </>
  );
};
