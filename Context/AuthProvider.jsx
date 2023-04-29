import { createContext } from "react";
import useAuth from "../Hooks/UseAuth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContexts = useAuth();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
