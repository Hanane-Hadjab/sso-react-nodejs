import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  return (
    <UserContext.Provider
      value={{
        userIsAuthenticated: userIsAuthenticated,
        setUserIsAuthenticated: setUserIsAuthenticated,
        user: user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
