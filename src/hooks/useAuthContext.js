import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAiuthContext must be inside AuthContext");
  }

  return context;
};
