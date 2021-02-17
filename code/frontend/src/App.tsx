import React, {useState} from "react";
import {LoginPage} from "./pages/login-page";
import {UserPanel} from "./pages/user-panel";
import {getWorkerData, emptyCredentials} from "./workerBackendFrontend";
import "./App.css";
import {useSetUser, useUser} from "./context/userContext";

const App: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState(emptyCredentials);
  const [loginMessage, setLoginMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const setUser = useSetUser();
  const user = useUser();

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserCredentials((state) => ({...state, login: e.target.value}));
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserCredentials((state) => ({...state, password: e.target.value}));
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await getWorkerData(userCredentials);
      setUser(response.user);
    } catch (err) {
      setLoading(false);
      setUserCredentials(emptyCredentials);
      setLoginMessage("Incorrect login or password");
    }
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <>
      {user != null ? (
        <UserPanel logout={logout} />
      ) : (
        <LoginPage
          userCredentials={userCredentials}
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
