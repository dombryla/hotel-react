import React from "react";
import {MsgRed} from "../components/msg-red";
import {UserCredentials} from "../workerBackendFrontend";

import "./login-page.css";
import "../components/submit-button.css";

type LoginPageProps = {
  userCredentials: UserCredentials;
  onChangeLogin(e: React.ChangeEvent<HTMLInputElement>): void;
  onChangePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  msg: string;
  loading: boolean;
};

export const LoginPage = ({
  userCredentials,
  onChangeLogin,
  onChangePassword,
  onClick,
  msg,
  loading,
}: LoginPageProps) => {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <div className="loginTitle">login</div>
        <input
          className="loginInput"
          type="text"
          name="login"
          placeholder="username"
          value={userCredentials.login}
          onChange={onChangeLogin}
        ></input>
        <input
          className="loginInput"
          type="password"
          name="password"
          placeholder="password"
          value={userCredentials.password}
          onChange={onChangePassword}
        ></input>
        <MsgRed>{msg}</MsgRed>
        {loading && <pre>loading...</pre>}
        <button className="submitButton" onClick={onClick}>
          Login
        </button>
      </form>
    </div>
  );
};
