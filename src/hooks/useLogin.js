import { useState } from "react";
import { projectAuth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      console.log(res.user);
      dispatch({
        type: "LOGIN",
        payload: res.user,
      });

      setError(null);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
      console.log(err.message);
    }
  };

  return { error, isPending, login };
};
