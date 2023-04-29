import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
  }
  return authContext;
};

export default useAuth;
