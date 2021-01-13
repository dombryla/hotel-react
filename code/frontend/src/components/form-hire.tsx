import React from "react";
import {useLocation} from "react-router-dom";
import {useUser} from "../context/userContext";

import {addWorker} from "../workerBackendFrontend";
import {Form, UserProps} from "../components/form";

import "./form-hire.css";

export const FormHire: React.FC = () => {
  const user = useUser();
  const status = user.status;
  const {pathname} = useLocation();

  const employer = user.directorId ? user.directorId : user.managerId;

  const onSubmit = (data: UserProps) => {
    addWorker({data, pathname, employer});
  };

  return <Form status={status} onSubmit={onSubmit} />;
};
