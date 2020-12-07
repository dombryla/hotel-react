import React, {useState} from "react";
import {LoginPage} from "./pages/login-page";
import {UserPanel} from "./pages/user-panel";
import "./App.css";

const App: React.FC = () => {
  const [gotAcces, setGotAcces] = useState<boolean>(true);
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  return <>{gotAcces ? <UserPanel /> : <LoginPage />}</>;
};

export default App;
