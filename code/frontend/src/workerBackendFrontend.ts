import {UserProps} from "./components/form";

const url = "http://localhost:2000";

type getWorkerDataProps = {
  login: string;
  password: string;
};

export const getWorkerData = async ({login, password}: getWorkerDataProps) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      login: login,
      password: password,
    },
  };
  const response = await fetch(`${url}/login`, options);
  if (response.status === 200 || response.status === 401) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};

interface addWorkerProps {
  data: UserProps;
  pathname: string;
  employer: number;
}

export const addWorker = async ({data, pathname, employer}: addWorkerProps) => {
  data.employer = employer;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${url}${pathname}`, options);
  if (response.ok) {
    return response.status;
  }
  throw Error(response.statusText);
};

export interface getWorkerListProps {
  employer: number;
  status: string;
  pathname: string;
}

export const getWorkerList = async ({
  employer,
  status,
  pathname,
}: getWorkerListProps) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      status: status,
      employerId: employer.toString(),
    },
  };
  const response = await fetch(`${url}${pathname}`, options);
  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};

export interface deleteWorkerProps {
  status: string;
  workerId: number | undefined;
}

export const deleteWorker = async ({status, workerId}: deleteWorkerProps) => {
  const options = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      status: status,
    },
  };
  const response = await fetch(`${url}/delete/${workerId}`, options);
  if (response.ok) {
    return response.status;
  }
  throw Error(response.statusText);
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
