import React, {useState} from "react";
import {LoginPage} from "./pages/login-page";
import {UserPanel} from "./pages/user-panel";
import {getWorkerData} from "./workerBackendFrontend";
import "./App.css";

const App: React.FC = () => {
  const [gotAcces, setGotAcces] = useState<boolean>(false);
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    getWorkerData({login, password}).then((data) => {
      if (data.gotAccess === true) {
        setGotAcces(true);
      } else {
        setLoginMessage(data.msg);
        setLogin("");
        setPassword("");
      }
    });
  };

  return (
    <>
      {gotAcces ? (
        <UserPanel />
      ) : (
        <LoginPage
          login={login}
          password={password}
          msg={loginMessage}
          onChangeLogin={handleChangeLogin}
          onChangePassword={handleChangePassword}
          onClick={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
