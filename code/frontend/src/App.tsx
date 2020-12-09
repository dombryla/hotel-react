import React, {useState} from "react";

import {LoginPage} from "./pages/login-page";
import {UserPanel} from "./pages/user-panel";

import {getWorkerData} from "./workerBackendFrontend";

import "./App.css";

const App: React.FC = () => {
  const [gotAcces, setGotAcces] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    getWorkerData({login, password}).then((data) => console.log(data));
  };

  return (
    <>
      {gotAcces ? (
        <UserPanel />
      ) : (
        <LoginPage
          login={login}
          password={password}
          onChangeLogin={handleChangeLogin}
          onChangePassword={handleChangePassword}
          onClick={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
