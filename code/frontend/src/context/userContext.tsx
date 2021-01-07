import {createContext, useContext, useReducer} from "react";

type user = any;

export const UserContext = createContext<user | undefined>(undefined);
export const SetUserContext = createContext<user | undefined>(undefined);

const reducer = (state: user, user: user) => {
  return user;
};

export const UserProvider: React.FC = ({children}) => {
  const [token, dispatch] = useReducer(reducer, "");

  return (
    <UserContext.Provider value={token}>
      <SetUserContext.Provider value={dispatch}>
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
