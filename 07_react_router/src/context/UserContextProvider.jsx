import { React, useState } from "react";
import { UserContext } from "./userContext";

export function UserContextProvider({ children }) {
  const [ user, setUser ] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
