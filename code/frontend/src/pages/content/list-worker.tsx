import React, {useState, useContext, useEffect} from "react";
import {getWorkerList} from "../../workerBackendFrontend";
import {UserContext} from "../../userContext";
import {useLocation} from "react-router-dom";
import {UserProps} from "../../components/form-hire";

export const ListWorker: React.FC = () => {
  const {user} = useContext(UserContext);
  const status = user.status;
  const employer = user.directorId ? user.directorId : user.managerId;
  const {pathname} = useLocation();
  const [dataWorker, setDataWorker] = useState<Array<UserProps> | null>(null);

  useEffect(() => {
    getWorkerList({employer, status, pathname}).then((data) => {
      console.log(data);
      setDataWorker(data);
    });
  }, [employer, status, pathname]);

  if (!dataWorker) return <div>Loading...</div>;
  const tableWorker = dataWorker.map((worker, i) => {
    const workerId = worker.directorId ? worker.directorId : worker.managerId;
    return (
      <tr key={workerId}>
        <th>{i + 1}</th>
        <td>{worker.firstName}</td>
        <td>{worker.lastName}</td>
        <td>{worker.sex}</td>
        <td>{worker.city}</td>
        <td>{worker.salary}</td>
        <td>{worker.position}</td>
        <td>{worker.startDate}</td>
        <td>{worker.terminationDate}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>City</th>
            <th>Salary</th>
            <th>Position</th>
            <th>StartDate</th>
            <th>TerminationDate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableWorker}</tbody>
      </table>
    </div>
  );
};
