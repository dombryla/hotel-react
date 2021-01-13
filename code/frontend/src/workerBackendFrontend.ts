import {UserProps} from "./components/form";

const url = "http://localhost:2000";

type getWorkerDataProps = {
  login: string;
  password: string;
};

export const getWorkerData = ({login, password}: getWorkerDataProps) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      login: login,
      password: password,
    },
  };
  return fetch(`${url}/login`, options)
    .then((response) => {
      if (response.status === 200 || response.status === 401) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Something went bad"));
};

interface addWorkerProps {
  data: UserProps;
  pathname: string;
  employer: number;
}

export const addWorker = ({data, pathname, employer}: addWorkerProps) => {
  data.employer = employer;

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${url}${pathname}`, options)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .catch((error) => console.log(error, "Something went bad"));
};

export interface getWorkerListProps {
  employer: string;
  status: string;
  pathname: string;
}

export const getWorkerList = ({
  employer,
  status,
  pathname,
}: getWorkerListProps) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      status: status,
      employerId: employer,
    },
  };
  return fetch(`${url}${pathname}`, options)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Something went bad"));
};

export interface deleteWorkerProps {
  status: "director" | "manager";
  id: number | undefined;
}

export const deleteWorker = ({status, id}: deleteWorkerProps) => {
  const options = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      status: status,
    },
  };
  return fetch(`${url}/delete/${id}`, options)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Something went bad"));
};

interface getEditWorkerDataProps {
  status: string;
  pathname: string;
}

export function getEditWorkerData({status, pathname}: getEditWorkerDataProps) {
  const options = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "",
      "Content-Type": "application/json",
      status: status,
    },
  };
  return fetch(`${url}${pathname}`, options)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Something went bad"));
}

interface editWorkerProps {
  data: UserProps;
  pathname: string;
}

export function editWorker({data, pathname}: editWorkerProps) {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${url}${pathname}`, options)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .catch((error) => console.log(error, "Something went bad"));
}
