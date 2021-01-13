import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useUser} from "../context/userContext";

import {getEditWorkerData, editWorker} from "../workerBackendFrontend";
import {Form, UserProps} from "../components/form";

export const FormEdit: React.FC = () => {
  const {status} = useUser();
  const [worker, setWorker] = useState<UserProps>();
  const {pathname} = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEditWorkerData({status, pathname}).then((data) => {
      setWorker(data[0]);
      setLoading(false);
    });
  }, [status, pathname]);

  const onSubmit = (data: UserProps) => {
    data.status = status;
    editWorker({data, pathname});
  };

  if (loading === true) {
    return <div>loading...</div>;
  }
  if (worker === undefined) {
    return <div>The data of user couldn't be downloaded</div>;
  }

  return <Form worker={worker} onSubmit={onSubmit} status={status} />;
};
