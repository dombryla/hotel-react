import React from "react";
import {Input} from "../components/input";
import "./login-page.css";

export const LoginPage: React.FC = () => {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <div className="loginTitle">login</div>
        <Input type="text" name="login" placeholder="username"></Input>
        <Input type="password" name="password" placeholder="password"></Input>
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
