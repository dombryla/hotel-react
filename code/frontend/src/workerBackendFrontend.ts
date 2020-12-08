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
