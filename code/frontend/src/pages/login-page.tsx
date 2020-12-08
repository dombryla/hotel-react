import React, {useState} from "react";
import {Input} from "../components/input";
import {SubmitButton} from "../components/submit-button";
import {getWorkerData} from "../workerBackendFrontend";
import "./login-page.css";

export const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(getWorkerData({login, password}));
    getWorkerData({login, password});
  };

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <div className="loginTitle">login</div>
        <Input
          type="text"
          name="login"
          placeholder="username"
          handleChange={handleChangeLogin}
          value={login}
        ></Input>
        <Input
          type="password"
          name="password"
          placeholder="password"
          handleChange={handleChangePassword}
          value={password}
        ></Input>
        <SubmitButton Click={handleSubmit}>Login</SubmitButton>
      </form>
    </div>
  );
};
