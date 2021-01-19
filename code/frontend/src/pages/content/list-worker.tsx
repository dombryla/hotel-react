import React, {useState, useEffect} from "react";
import {getWorkerList, deleteWorker} from "../../workerBackendFrontend";
import {useUser} from "../../context/userContext";
import {useLocation} from "react-router-dom";
import {UserProps} from "../../components/form";
import {Modal} from "../../components/modal";
import {Link} from "react-router-dom";

import "../../components/delete-button.css";

import "./list-worker.css";

export const ListWorker: React.FC = () => {
  const {status, directorId, managerId}: UserProps = useUser();
  const employer = directorId ? directorId : managerId;
  const {pathname} = useLocation();
  const [dataWorker, setDataWorker] = useState<Array<UserProps> | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  useEffect(() => {
    async function getWorkers() {
      if (employer) {
        try {
          const data = await getWorkerList({employer, status, pathname});
          setDataWorker(data);
        } catch (err) {
          throw Error(err);
        }
      }
    }
    getWorkers();
  }, [employer, status, pathname, dataWorker]);

  const handleDeleteClick = async (status: string, workerId?: number) => {
    console.log(`status ${status}, workerId ${workerId}`);
    try {
      await deleteWorker({status, workerId});
      setMessageModal("The user has been succesfully deleted from database");
      setShowModal(true);
    } catch (err) {
      setMessageModal("Something went bad");
      throw Error(err);
    }
  };

  const modalClick = () => {
    setShowModal(false);
  };

  if (!dataWorker) return <div>Loading...</div>;
  const tableWorker = dataWorker.map((worker, i) => {
    const workerId = worker.managerId ? worker.managerId : worker.employeeId;
    return (
      <tr key={workerId}>
        <th>{i + 1}</th>
        <td>{worker.firstName}</td>
        <td>{worker.lastName}</td>
        <td>{worker.email}</td>
        <td>{worker.sex}</td>
        <td>{worker.city}</td>
        <td>{worker.salary}</td>
        <td>{worker.position}</td>
        <td>{worker.startDate}</td>
        <td>{worker.terminationDate}</td>
        <td>
          <Link to={`/edit/${workerId}`}>
            <button className="deleteButton">edit</button>
          </Link>
          <button
            className="deleteButton"
            onClick={() => handleDeleteClick(status, workerId)}
          >
            delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <table className="contentTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
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
      <Modal open={showModal} onClick={modalClick}>
        {messageModal}
      </Modal>
    </>
  );
};
