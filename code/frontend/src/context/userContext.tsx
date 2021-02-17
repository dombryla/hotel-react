import React, {createContext, useContext, useState} from "react";
import {User} from "../model/user";

export const UserContext = createContext<User | undefined>(undefined);

type SetUser = (user: User | undefined) => void;

export const SetUserContext = createContext<SetUser | undefined>(undefined);

export const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const useSetUser = () => {
  const context = useContext(SetUserContext);
  if (context === undefined) {
    throw new Error("useSetUser must be used within a UserProvider");
  }
  return context;
};
