import React, {useState} from "react";
import {Input} from "../components/input";
import {SubmitButton} from "../components/submit-button";
import "./login-page.css";

interface LoginPageProps {
  login: string;
  password: string;
  onChangeLogin(e: React.ChangeEvent<HTMLInputElement>): void;
  onChangePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick: any;
}

export const LoginPage = ({
  login,
  password,
  onChangeLogin,
  onChangePassword,
  onClick,
}: LoginPageProps) => {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <div className="loginTitle">login</div>
        <Input
          type="text"
          name="login"
          placeholder="username"
          handleChange={onChangeLogin}
          value={login}
        ></Input>
        <Input
          type="password"
          name="password"
          placeholder="password"
          handleChange={onChangePassword}
          value={password}
        ></Input>
        <SubmitButton Click={onClick}>Login</SubmitButton>
      </form>
    </div>
  );
};
