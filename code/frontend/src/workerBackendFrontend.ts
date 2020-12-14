import {UserProps} from "./components/form-hire";

const url = "http://localhost:2000";

interface getWorkerDataProps {
  login: string;
  password: string;
}

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
  console.log(data);
  fetch(`${url}${pathname}`, options)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .catch((error) => console.log(error, "Something went bad"));
};
