import React, {useState} from "react";
import {LoginPage} from "./pages/login-page";
import {UserPanel} from "./pages/user-panel";
import {getWorkerData} from "./workerBackendFrontend";
import "./App.css";
import {useSetUser} from "./userContext";

const App: React.FC = () => {
  const [gotAcces, setGotAcces] = useState<boolean>(false);
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setUser = useSetUser();

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    getWorkerData({login, password}).then((data) => {
      if (data.gotAccess === true) {
        setGotAcces(true);
        setUser(data.user);
      } else {
        setLoginMessage(data.msg);
        setLogin("");
        setPassword("");
      }
      setLoading(false);
    });
  };

  const logout = () => {
    setGotAcces(false);
  };

  return (
    <>
      {gotAcces ? (
        <UserPanel logout={logout} />
      ) : (
        <LoginPage
          login={login}
          password={password}
          msg={loginMessage}
          onChangeLogin={handleChangeLogin}
          onChangePassword={handleChangePassword}
          onClick={handleSubmit}
          loading={loading}
        />
      )}
    </>
  );
};

export default App;
