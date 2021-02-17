import {User} from "./model/user";

const url = "http://localhost:2000";

export type UserCredentials = {
  login: string;
  password: string;
};

export const emptyCredentials: UserCredentials = {
  login: "",
  password: "",
};

type GetWorkerDataResponse = {
  user: User;
  msg: string;
};

export const getWorkerData = async (
  userCrentials: UserCredentials
): Promise<GetWorkerDataResponse> => {
  const response = await fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify(userCrentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};

type AddWorkerParams = {
  newWorker: User;
  pathname: string;
};

export const addWorker = async ({newWorker, pathname}: AddWorkerParams) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newWorker),
    headers: {
      "Contet-Typle": "application/json",
    },
  };
  const response = await fetch(`${url}${pathname}`, options);
  if (response.ok) {
    return response.status;
  }
  throw Error(response.statusText);
};

export type GetWorkerListParams = {
  employer: number;
  status: string;
  pathname: string;
};

export const getWorkerList = async ({
  employer,
  status,
  pathname,
}: GetWorkerListParams) => {
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

export type DeleteWorkerParams = {
  status: string;
  workerId: number | undefined;
};

export const deleteWorker = async ({status, workerId}: DeleteWorkerParams) => {
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

type GetEditWorkerDataParams = {
  status: string;
  pathname: string;
};

export const getEditWorkerData = async ({
  status,
  pathname,
}: GetEditWorkerDataParams) => {
  const options = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "",
      "Content-Type": "application/json",
      status: status,
    },
  };
  const response = await fetch(`${url}${pathname}`, options);
  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};

type EditWorkerParams = {
  data: User;
  pathname: string;
};

export const editWorker = async ({data, pathname}: EditWorkerParams) => {
  const options = {
    method: "PUT",
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
