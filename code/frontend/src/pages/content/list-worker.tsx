import React, {useContext, useEffect} from "react";
import {getWorkerList} from "../../workerBackendFrontend";
import {UserContext} from "../../userContext";
import {useLocation} from "react-router-dom";

export const ListWorker: React.FC = () => {
  const {user} = useContext(UserContext);
  const status = user.status;
  const employer = user.directorId ? user.directorId : user.managerId;
  const {pathname} = useLocation();

  useEffect(() => {
    getWorkerList({employer, status, pathname}).then((data) =>
      console.log(data)
    );
  });

  return <div>ListWorker</div>;
};
