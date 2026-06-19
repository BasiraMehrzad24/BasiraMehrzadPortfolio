import { createContext, useContext } from "react";

// createContext create an empty box
const UserContext = createContext();

export function UserProvider({ children }) {
  // this info will put on createContext
  const user = {
    name: "Basira Mehrzad",
    role: "Frontend Developer",
    email: "basira@example.com",
  };
  // we share this info globally
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
